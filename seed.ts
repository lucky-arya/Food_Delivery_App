import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { categories, customizations, menu, menuCustomizations } from './lib/data';

// Simple .env parser to load env variables at runtime
function loadEnv() {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      envContent.split(/\r?\n/).forEach(line => {
        // Skip comments and empty lines
        if (line.trim().startsWith('#') || !line.includes('=')) return;
        
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || '';
          // Remove surrounding quotes if any
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
          } else if (value.startsWith("'") && value.endsWith("'")) {
            value = value.substring(1, value.length - 1);
          }
          process.env[key] = value.trim();
        }
      });
      console.log('✅ Loaded environment variables from .env');
    } else {
      console.log('⚠️ No .env file found in root directory, relying on system environment variables');
    }
  } catch (e) {
    console.warn('⚠️ Could not parse .env file:', e);
  }
}

// Run loader
loadEnv();

const supabaseUrl = process.env.SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('\n❌ ERROR: Supabase credentials missing.');
  console.error('Make sure you have set the following in your .env file:');
  console.error('  - SUPABASE_URL or EXPO_PUBLIC_SUPABASE_URL');
  console.error('  - SUPABASE_SERVICE_ROLE_KEY (must be the service_role key, not the anon key, to bypass RLS/policies)\n');
  process.exit(1);
}

// Initialize Supabase Client with service role key to bypass RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false
  }
});

async function runSeed() {
  console.log('\n🚀 Starting database seeding...');

  try {
    // 1. Delete existing data (order matters due to foreign keys)
    console.log('🧹 Clearing existing data...');
    
    console.log('   - Clearing menu_customizations...');
    const { error: delMcError } = await supabase.from('menu_customizations').delete().neq('id', -1);
    if (delMcError) throw new Error(`Failed to delete menu_customizations: ${delMcError.message}`);

    console.log('   - Clearing menu...');
    const { error: delMenuError } = await supabase.from('menu').delete().neq('id', -1);
    if (delMenuError) throw new Error(`Failed to delete menu: ${delMenuError.message}`);

    console.log('   - Clearing customizations...');
    const { error: delCustError } = await supabase.from('customizations').delete().neq('id', -1);
    if (delCustError) throw new Error(`Failed to delete customizations: ${delCustError.message}`);

    console.log('   - Clearing categories...');
    const { error: delCatError } = await supabase.from('categories').delete().neq('id', -1);
    if (delCatError) throw new Error(`Failed to delete categories: ${delCatError.message}`);

    console.log('✨ Database cleared successfully.');

    // 2. Insert Categories
    console.log(`📥 Seeding categories (${categories.length} items)...`);
    const { error: catInsertError } = await supabase
      .from('categories')
      .insert(categories.map(c => ({ id: c.id, name: c.name, description: c.description })));
    if (catInsertError) throw new Error(`Failed to insert categories: ${catInsertError.message}`);
    console.log('✅ Categories seeded successfully.');

    // 3. Insert Customizations
    console.log(`📥 Seeding customizations (${customizations.length} items)...`);
    const { error: custInsertError } = await supabase
      .from('customizations')
      .insert(customizations.map(c => ({ id: c.id, name: c.name, price: c.price, type: c.type })));
    if (custInsertError) throw new Error(`Failed to insert customizations: ${custInsertError.message}`);
    console.log('✅ Customizations seeded successfully.');

    // 4. Insert Menu Items
    console.log(`📥 Seeding menu (${menu.length} items)...`);
    // Insert in batches of 50 to avoid payload size errors
    const menuBatches = chunkArray(menu, 50);
    for (let i = 0; i < menuBatches.length; i++) {
      const batch = menuBatches[i];
      console.log(`   - Inserting menu batch ${i + 1}/${menuBatches.length}...`);
      const { error: menuInsertError } = await supabase
        .from('menu')
        .insert(batch.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          image_url: item.image_url,
          rating: item.rating,
          calories: item.calories,
          protein: item.protein,
          price: item.price,
          category_id: item.category_id
        })));
      if (menuInsertError) throw new Error(`Failed to insert menu batch ${i + 1}: ${menuInsertError.message}`);
    }
    console.log('✅ Menu items seeded successfully.');

    // 5. Insert Menu Customizations
    console.log(`📥 Seeding menu customizations (${menuCustomizations.length} links)...`);
    // Insert in batches of 100
    const mcBatches = chunkArray(menuCustomizations, 100);
    for (let i = 0; i < mcBatches.length; i++) {
      const batch = mcBatches[i];
      console.log(`   - Inserting menu customizations batch ${i + 1}/${mcBatches.length}...`);
      const { error: mcInsertError } = await supabase
        .from('menu_customizations')
        .insert(batch.map(link => ({
          menu_id: link.menu_id,
          customization_id: link.customization_id
        })));
      if (mcInsertError) throw new Error(`Failed to insert menu customizations batch ${i + 1}: ${mcInsertError.message}`);
    }
    console.log('✅ Menu customizations seeded successfully.');

    console.log('\n🎉 DATABASE SEEDING COMPLETED SUCCESSFULLY!');
    console.log('\nℹ️ IMPORTANT NOTE FOR SEQUENCE RESETTING:');
    console.log('Since we inserted records with explicit IDs, PostgreSQL auto-incrementing sequences need to be synchronized.');
    console.log('If you add new rows later in the Supabase dashboard or your application, you might get a "duplicate key" error.');
    console.log('To prevent this, please copy and run the following SQL commands in your Supabase SQL Editor:');
    console.log('--------------------------------------------------');
    console.log("SELECT setval(pg_get_serial_sequence('categories', 'id'), COALESCE(max(id), 1)) FROM categories;");
    console.log("SELECT setval(pg_get_serial_sequence('customizations', 'id'), COALESCE(max(id), 1)) FROM customizations;");
    console.log("SELECT setval(pg_get_serial_sequence('menu', 'id'), COALESCE(max(id), 1)) FROM menu;");
    console.log("SELECT setval(pg_get_serial_sequence('menu_customizations', 'id'), COALESCE(max(id), 1)) FROM menu_customizations;");
    console.log('--------------------------------------------------\n');

  } catch (error: any) {
    console.error('\n❌ ERROR: Seeding process failed.');
    console.error(error.message || error);
    process.exit(1);
  }
}

// Helper function to chunk array into batches
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

runSeed();
