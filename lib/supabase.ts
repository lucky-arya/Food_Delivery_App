import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, processLock } from '@supabase/supabase-js';
import { AppState, Platform } from 'react-native';
import 'react-native-url-polyfill/auto';
import { CreateUserParams, SignInParams, User } from "../type";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        ...(Platform.OS !== 'web' ? { storage: AsyncStorage } : {}),
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        lock: processLock,
    },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
if (Platform.OS !== 'web') {
    AppState.addEventListener('change', (state) => {
        if (state === 'active') {
            supabase.auth.startAutoRefresh()
        } else {
            supabase.auth.stopAutoRefresh()
        }
    })
}

export const creatUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;
        const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
                data: {
                    name,
                    avatar: avatarUrl,
                }
            }
        });
        if (error) throw error;
        return data;
    } catch (error: any) {
        throw new Error(error.message || String(error));
    }
}

export const Sign_In = async ({ email, password }: SignInParams) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
        });
        if (error) throw error;
        return data;
    } catch (error: any) {
        throw new Error(error.message || String(error));
    }
}

export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        if (!session?.user) return null;

        const user = session.user;
        let name = user.user_metadata?.name || '';
        let avatar = user.user_metadata?.avatar || '';

        try {
            // Query the public.profiles table
            const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            if (profile && !profileError) {
                name = profile.name;
                avatar = profile.avatar;
            }
        } catch (dbError) {
            // Fall back to auth user metadata if DB query fails
        }

        return {
            $id: user.id,
            $createdAt: user.created_at || '',
            $updatedAt: user.updated_at || '',
            $permissions: [],
            $databaseId: '',
            $collectionId: '',
            name,
            email: user.email || '',
            avatar,
        } as unknown as User;
    } catch (error) {
        return null;
    }
};

export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return true;
    } catch (error: any) {
        throw new Error(error.message || String(error));
    }
};


