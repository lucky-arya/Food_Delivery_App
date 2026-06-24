// data.ts

export const categories = [
    {
        id: 1,
        name: "Burgers",
        description: "Juicy gourmet burgers",
    },
    {
        id: 2,
        name: "Pizza",
        description: "Stone baked pizzas",
    },
    {
        id: 3,
        name: "Pasta",
        description: "Authentic Italian pasta",
    },
    {
        id: 4,
        name: "Salads",
        description: "Fresh healthy salads",
    },
    {
        id: 5,
        name: "Desserts",
        description: "Sweet delights",
    },
    {
        id: 6,
        name: "Beverages",
        description: "Refreshing drinks",
    },
    {
        id: 7,
        name: "Sandwiches",
        description: "Fresh sandwiches",
    },
    {
        id: 8,
        name: "Breakfast",
        description: "Morning specials",
    },
    {
        id: 9,
        name: "Healthy Bowls",
        description: "Protein rich bowls",
    },
    {
        id: 10,
        name: "Asian",
        description: "Asian cuisine",
    },
];

export const customizations = [
    { id: 1, name: "Extra Cheese", price: 49, type: "topping" },
    { id: 2, name: "Double Patty", price: 99, type: "topping" },
    { id: 3, name: "Extra Sauce", price: 29, type: "sauce" },
    { id: 4, name: "Bacon", price: 79, type: "topping" },
    { id: 5, name: "Mushrooms", price: 39, type: "topping" },
    { id: 6, name: "Jalapenos", price: 35, type: "topping" },
    { id: 7, name: "Paneer", price: 59, type: "topping" },
    { id: 8, name: "Chicken", price: 89, type: "topping" },
    { id: 9, name: "Egg", price: 25, type: "topping" },
    { id: 10, name: "Avocado", price: 75, type: "topping" },

    { id: 11, name: "Small", price: 0, type: "size" },
    { id: 12, name: "Medium", price: 49, type: "size" },
    { id: 13, name: "Large", price: 99, type: "size" },

    { id: 14, name: "Extra Spicy", price: 15, type: "spice" },
    { id: 15, name: "No Onion", price: 0, type: "topping" },
    { id: 16, name: "No Garlic", price: 0, type: "topping" },
    { id: 17, name: "Gluten Free", price: 55, type: "crust" },
    { id: 18, name: "Vegan", price: 45, type: "side" },
    { id: 19, name: "Low Fat", price: 20, type: "side" },
    { id: 20, name: "Extra Protein", price: 89, type: "topping" },

    { id: 21, name: "Coke", price: 49, type: "side" },
    { id: 22, name: "Pepsi", price: 49, type: "side" },
    { id: 23, name: "French Fries", price: 79, type: "side" },
    { id: 24, name: "Garlic Bread", price: 99, type: "side" },
    { id: 25, name: "Onion Rings", price: 89, type: "side" },
    { id: 26, name: "Brownie", price: 119, type: "side" },
    { id: 27, name: "Ice Cream", price: 99, type: "side" },
    { id: 28, name: "Milkshake", price: 149, type: "side" },
    { id: 29, name: "Nachos", price: 129, type: "side" },
    { id: 30, name: "Coffee", price: 59, type: "side" },
];

interface FoodSeed {
    name: string;
    description: string;
    imageId: string;
    price: number;
    calories: number;
    protein: number;
}

const categorySeeds: Record<number, FoodSeed[]> = {
    1: [
        { name: "Classic Cheeseburger", description: "Juicy beef patty, melted cheddar cheese, lettuce, tomato, pickles, and classic sauce on a toasted brioche bun.", imageId: "photo-1568901346375-23c9450c58cd", price: 249, calories: 650, protein: 28 },
        { name: "BBQ Bacon Burger", description: "Flame-grilled beef patty, crispy bacon strips, tangy BBQ sauce, cheddar cheese, and onion rings.", imageId: "photo-1550547660-d9450f859349", price: 299, calories: 820, protein: 34 },
        { name: "Spicy Jalapeno Burger", description: "Spicy beef patty, fire-roasted jalapenos, pepper jack cheese, spicy chipotle mayo, and fresh lettuce.", imageId: "photo-1571091718767-18b5b1457add", price: 279, calories: 710, protein: 30 },
        { name: "Mushroom Swiss Burger", description: "Gourmet beef patty topped with sautéed button mushrooms, melted Swiss cheese, and garlic herb aioli.", imageId: "photo-1586190848861-99aa4a171e90", price: 289, calories: 750, protein: 32 },
        { name: "Double Beef Burger", description: "Two flame-grilled beef patties, double American cheese, special house sauce, shredded lettuce, and onions.", imageId: "photo-1551782450-a2132b4ba21d", price: 379, calories: 1050, protein: 54 },
        { name: "Veggie Supreme Burger", description: "Savory plant-based patty, fresh spinach, tomatoes, cucumber slices, avocado, and herb vegan mayo.", imageId: "photo-1525059696034-4967a8e1dca2", price: 229, calories: 480, protein: 18 },
        { name: "Crispy Zinger Chicken Burger", description: "Crispy double-breaded chicken breast, spicy seasoning, iceberg lettuce, and creamy mayonnaise on a sesame bun.", imageId: "photo-1594212699903-ec8a3eca50f5", price: 269, calories: 680, protein: 26 },
        { name: "Crispy Golden Fish Burger", description: "Golden crumbed fish fillet, tartar sauce, processed cheese, and fresh pickles in a steamed bun.", imageId: "photo-1606755962773-d324e0a13086", price: 259, calories: 590, protein: 22 },
        { name: "Teriyaki Chicken Burger", description: "Grilled chicken breast glazed with sweet teriyaki sauce, grilled pineapple, lettuce, and sesame mayo.", imageId: "photo-1508737027454-e6454ef45afd", price: 289, calories: 530, protein: 29 },
        { name: "Avocado Turkey Burger", description: "Lean seasoned turkey patty, fresh sliced avocado, alfalfa sprouts, red onion, and cranberry spread.", imageId: "photo-1625813506062-0aeb1d7a094b", price: 319, calories: 510, protein: 31 },
        { name: "Texas Toast BBQ Burger", description: "Gourmet beef patty, caramelized onions, pepper jack cheese, Texas BBQ sauce, served on thick garlic butter toast.", imageId: "photo-1549611016-3a70d82b5040", price: 299, calories: 880, protein: 33 },
        { name: "Truffle Butter Burger", description: "Angus beef patty, black truffle butter, caramelized onions, melted fontina cheese, and wild rocket.", imageId: "photo-1534790566766-4b13a696238b", price: 399, calories: 790, protein: 35 },
        { name: "Crispy Onion String Burger", description: "Beef patty, haystack crispy onion strings, pepper jack cheese, and horseradish pub sauce.", imageId: "photo-1512152272829-e3139592d56f", price: 289, calories: 840, protein: 31 },
        { name: "Smashed Bacon Cheeseburger", description: "Two thin smashed patties, crispy smoked bacon, melted cheddar, mustard, ketchup, and chopped pickles.", imageId: "photo-1572802419224-296b0aeee0d9", price: 349, calories: 890, protein: 42 },
        { name: "Mini Slider Trio Combo", description: "Three mini burgers (one classic beef, one BBQ chicken, and one veggie) served with a side of small fries.", imageId: "photo-1585238342024-78d387f4a707", price: 329, calories: 910, protein: 38 },
    ],
    2: [
        { name: "Classic Margherita Pizza", description: "Simple yet authentic: rich tomato sauce, fresh buffalo mozzarella, fresh basil leaves, and a drizzle of extra virgin olive oil.", imageId: "photo-1513104890138-7c749659a591", price: 299, calories: 800, protein: 32 },
        { name: "Pepperoni Feast Pizza", description: "A classic crowd favorite loaded with double spicy pepperoni, mozzarella cheese, and rich marinara sauce.", imageId: "photo-1534308983496-4fabb1a015ee", price: 399, calories: 1100, protein: 44 },
        { name: "Garden Veggie Pizza", description: "Freshly sliced bell peppers, red onions, mushrooms, black olives, sweet corn, cherry tomatoes, and mozzarella.", imageId: "photo-1571066811602-71683a3f680d", price: 349, calories: 750, protein: 28 },
        { name: "BBQ Chicken Pizza", description: "Grilled chicken breast chunks, smoky BBQ sauce base, sliced red onion, cilantro, and melted mozzarella.", imageId: "photo-1593560708920-61cd96c590c7", price: 429, calories: 980, protein: 46 },
        { name: "Four Cheese Pizza", description: "Cheese lover's dream: mozzarella, gorgonzola, parmesan, and ricotta cheeses on a garlic herb crust.", imageId: "photo-1574071318508-1cdbab80d002", price: 399, calories: 1050, protein: 42 },
        { name: "Spicy Mexican Pizza", description: "Spicy minced beef, jalapenos, onions, tomatoes, sweet corn, cheddar-mozzarella blend, topped with fresh cilantro.", imageId: "photo-1628840042765-356cda07504e", price: 419, calories: 1080, protein: 45 },
        { name: "Hawaiian Paradise Pizza", description: "Classic combination of sweet pineapple chunks, sliced smoked ham, rich tomato sauce, and mozzarella cheese.", imageId: "photo-1590947132387-155cc02f3212", price: 379, calories: 890, protein: 36 },
        { name: "Tikka Paneer Pizza", description: "Indian-style pizza topped with spiced paneer tikka chunks, green bell pepper, onion, and mint mayo drizzle.", imageId: "photo-1544982503-9f984c14501a", price: 369, calories: 960, protein: 38 },
        { name: "Mushroom Truffle Pizza", description: "Earthy wild mushrooms, white truffle oil, caramelized onions, mozzarella, and fresh arugula.", imageId: "photo-1511018556340-d16986a1c194", price: 449, calories: 880, protein: 30 },
        { name: "Neapolitan Basil Pizza", description: "Wood-fired crust, San Marzano tomato sauce, fresh mozzarella di bufala, and extra virgin olive oil.", imageId: "photo-1604068549290-dea0e4a305ca", price: 359, calories: 730, protein: 26 },
        { name: "Supreme Loaded Pizza", description: "Loaded with pepperoni, Italian sausage, ham, mushrooms, green peppers, onions, black olives, and mozzarella.", imageId: "photo-1613564834361-9436948817d1", price: 459, calories: 1250, protein: 52 },
        { name: "Greek Mediterranean Pizza", description: "Feta cheese, spinach, Kalamata olives, artichoke hearts, sundried tomatoes, and garlic olive oil sauce.", imageId: "photo-1506354666786-959d6d497f1a", price: 389, calories: 840, protein: 29 },
        { name: "Prosciutto Arugula Pizza", description: "Thin sliced prosciutto ham, fresh baby wild arugula, shaved parmesan cheese, and rich marinara sauce.", imageId: "photo-1573821663912-569905455b1c", price: 479, calories: 920, protein: 40 },
        { name: "White Garlic Spinach Pizza", description: "Creamy ricotta sauce, roasted garlic, baby spinach, parmesan, and shredded mozzarella cheese.", imageId: "photo-1555072956-7758afb20e8f", price: 349, calories: 860, protein: 31 },
        { name: "Buffalo Chicken Pizza", description: "Spicy buffalo sauce base, grilled chicken, crumbled blue cheese, red onions, and mozzarella.", imageId: "photo-1618219908412-a29a1bb7b86e", price: 429, calories: 1040, protein: 48 },
    ],
    3: [
        { name: "Fettuccine Alfredo", description: "Classic Italian fettuccine pasta tossed in a rich, creamy parmesan cheese and butter sauce.", imageId: "photo-1621996346565-e3bb627add2e", price: 279, calories: 850, protein: 22 },
        { name: "Penne Arrabiata", description: "Spicy tubular pasta tossed in a fiery tomato sauce with garlic, chili flakes, and fresh parsley.", imageId: "photo-1563379091339-03b21ab4a4f8", price: 249, calories: 540, protein: 14 },
        { name: "Creamy Basil Pesto Pasta", description: "Penne pasta coated in fresh basil, pine nuts, garlic, parmesan, olive oil pesto sauce, topped with cherry tomatoes.", imageId: "photo-155183053-bf91a1d81141", price: 269, calories: 720, protein: 16 },
        { name: "Classic Carbonara", description: "Spaghetti tossed with crispy pancetta bacon, egg yolk, freshly cracked black pepper, and Pecorino Romano cheese.", imageId: "photo-1555949258-eb67b1ef0ceb", price: 329, calories: 910, protein: 28 },
        { name: "Baked Beef Lasagna", description: "Layers of pasta sheets, rich bolognese meat sauce, creamy bechamel, melted mozzarella, baked golden brown.", imageId: "photo-1546549032-9571cd6b27df", price: 349, calories: 950, protein: 36 },
        { name: "Four Cheese Macaroni", description: "Elbow macaroni baked in a rich, velvety cheese sauce made with cheddar, Monterey Jack, mozzarella, and parmesan.", imageId: "photo-1608897013039-887f21d8c804", price: 259, calories: 880, protein: 24 },
        { name: "Spaghetti Marinara Seafood", description: "Spaghetti served with sautéed shrimp, squid, and mussels in a garlic-infused tomato marinara sauce.", imageId: "photo-1611270624006-57360d3d61ba", price: 419, calories: 730, protein: 32 },
        { name: "Truffle Mushroom Fusilli", description: "Spiral pasta in a creamy wild mushroom and truffle oil sauce, finished with grated parmesan.", imageId: "photo-1612874742237-6526221588e3", price: 329, calories: 780, protein: 18 },
        { name: "Spaghetti Bolognese", description: "Spaghetti topped with slow-simmered beef, onion, carrot, celery, and tomato ragout, garnished with parmesan.", imageId: "photo-1595295333158-ab7ecb65744f", price: 299, calories: 690, protein: 27 },
        { name: "Spinach & Ricotta Ravioli", description: "Housemade ravioli stuffed with spinach and creamy ricotta, served in a butter sage sauce.", imageId: "photo-1609167721349-f32238473239", price: 319, calories: 580, protein: 15 },
        { name: "Shrimp Scampi Pasta", description: "Linguine pasta tossed with juicy sautéed shrimp in a light lemon, white wine, garlic, and butter sauce.", imageId: "photo-1645112411341-6c4fd023714a", price: 399, calories: 680, protein: 29 },
        { name: "Potato Gnocchi Gorgonzola", description: "Soft potato dumplings in a rich, creamy Gorgonzola blue cheese sauce, garnished with toasted walnuts.", imageId: "photo-1589301760014-d929f3979dbc", price: 299, calories: 810, protein: 17 },
        { name: "Garlic Butter Spaghetti", description: "Simple spaghetti tossed with extra virgin olive oil, toasted garlic, chili flakes, and flat-leaf parsley.", imageId: "photo-1579684947550-22e945224d5a", price: 199, calories: 510, protein: 11 },
        { name: "Baked Ziti Bolognese", description: "Ziti pasta mixed with bolognese sauce and ricotta, topped with mozzarella and baked until bubbly.", imageId: "photo-1622973533168-3ee7bc24630d", price: 289, calories: 820, protein: 26 },
        { name: "Vegan Avocado Pasta", description: "Spaghetti tossed in a rich, creamy sauce made of ripe avocados, garlic, lemon juice, and fresh basil.", imageId: "photo-1560781290-7dc94c0f8f4f", price: 259, calories: 550, protein: 12 },
    ],
    4: [
        { name: "Classic Caesar Salad", description: "Crisp romaine lettuce, garlic croutons, shaved parmesan cheese, tossed in a creamy Caesar dressing.", imageId: "photo-1550304943-4f24f54ddde9", price: 199, calories: 350, protein: 8 },
        { name: "Greek Olive Salad", description: "Cucumber, tomatoes, red onions, green bell peppers, Kalamata olives, and block of feta cheese with Greek vinaigrette.", imageId: "photo-1540420773420-3366772f4999", price: 219, calories: 290, protein: 7 },
        { name: "Quinoa Avocado Salad", description: "Organic white quinoa, fresh diced avocado, cherry tomatoes, cucumbers, cilantro, and lemon-lime vinaigrette.", imageId: "photo-1512621776951-a57141f2eefd", price: 249, calories: 410, protein: 11 },
        { name: "Roasted Chicken Salad", description: "Sliced herb-grilled chicken breast, mixed greens, cherry tomatoes, cucumbers, carrots, and balsamic dressing.", imageId: "photo-1546069901-ba9599a7e63c", price: 269, calories: 450, protein: 28 },
        { name: "Garden Tossed Veg Salad", description: "Fresh seasonal greens, shredded carrots, cucumber slices, cherry tomatoes, radishes, and lemon herb dressing.", imageId: "photo-1607532941433-304659e8198a", price: 179, calories: 180, protein: 4 },
        { name: "Caprese Salad", description: "Slices of ripe plum tomatoes, fresh buffalo mozzarella, fresh basil leaves, drizzled with sweet balsamic glaze.", imageId: "photo-1515543587357-4a6039563452", price: 239, calories: 320, protein: 12 },
        { name: "Asian Sesame Salad", description: "Shredded cabbage, carrots, edamame, mandarin oranges, crispy wonton strips, with ginger sesame dressing.", imageId: "photo-1505253716362-afaea1d3d1af", price: 219, calories: 340, protein: 6 },
        { name: "Spinach Strawberry Salad", description: "Baby spinach, fresh sliced strawberries, crumbled goat cheese, toasted almonds, with raspberry vinaigrette.", imageId: "photo-1623428187969-5da2d8a7f237", price: 249, calories: 310, protein: 8 },
        { name: "Classic Cobb Salad", description: "Shredded chicken, hard-boiled egg, crispy bacon, blue cheese, avocado, tomatoes, on a bed of romaine lettuce.", imageId: "photo-1529042410759-befb1204b468", price: 289, calories: 620, protein: 32 },
        { name: "Feta Beetroot Salad", description: "Slow-roasted beetroots, mixed salad greens, crumbled French feta, toasted walnuts, and orange vinaigrette.", imageId: "photo-1543339308-43e59d6b73a6", price: 229, calories: 280, protein: 7 },
        { name: "Smoked Salmon Salad", description: "Thinly sliced cold-smoked salmon, mixed greens, capers, red onions, dill, and lemon cream dressing.", imageId: "photo-1614961908993-c1c0a2540fca", price: 349, calories: 380, protein: 24 },
        { name: "Mediterranean Chickpea Salad", description: "Boiled chickpeas, chopped cucumbers, tomatoes, red onions, parsley, feta cheese, with olive oil & lemon juice.", imageId: "photo-1572449043416-55f4685c9bb7", price: 199, calories: 310, protein: 10 },
        { name: "Walnut Pear Salad", description: "Fresh sliced pears, mixed greens, caramelized walnuts, crumbled blue cheese, and sweet maple vinaigrette.", imageId: "photo-1505576399279-565b52d4ac71", price: 239, calories: 330, protein: 6 },
        { name: "Healthy Kale Bowl Salad", description: "Massaged baby kale, sweet potato chunks, dried cranberries, pumpkin seeds, and tahini dressing.", imageId: "photo-1547496502-affa22d38842", price: 219, calories: 390, protein: 9 },
        { name: "Thai Peanut Noodle Salad", description: "Cold noodles, shredded vegetables, fresh cilantro, crushed peanuts, tossed in spicy peanut dressing.", imageId: "photo-1615485290382-441e4d049cb5", price: 229, calories: 470, protein: 12 },
    ],
    5: [
        { name: "Chocolate Fudge Brownie", description: "Rich, dense chocolate brownie served warm with a shiny, crackly top.", imageId: "photo-1606313564200-e75d5e30476c", price: 129, calories: 450, protein: 5 },
        { name: "New York Cheesecake", description: "Classic dense and creamy baked cheesecake on a buttery graham cracker crust with strawberry coulis.", imageId: "photo-1524351199679-46cddf530c04", price: 199, calories: 580, protein: 8 },
        { name: "Classic Italian Tiramisu", description: "Layers of espresso-soaked ladyfingers, velvety mascarpone cream, and a dusting of cocoa powder.", imageId: "photo-1571877227200-a0d98ea607e9", price: 189, calories: 490, protein: 7 },
        { name: "Molten Chocolate Lava Cake", description: "Delectable chocolate cake with a warm, liquid chocolate center that flows out when cut.", imageId: "photo-1606890737304-57a1ca8a5b62", price: 149, calories: 510, protein: 6 },
        { name: "Glazed Donut Holes", description: "Bite-sized sweet yeast donut holes dipped in a smooth sugary glaze (6 pieces).", imageId: "photo-1551024601-bec78aea704b", price: 99, calories: 320, protein: 4 },
        { name: "Vanilla Bean Ice Cream", description: "Two scoops of premium ice cream loaded with real vanilla bean flecks.", imageId: "photo-1563805042-7684c019e1cb", price: 119, calories: 280, protein: 5 },
        { name: "Belgian Chocolate Waffles", description: "Two warm, crispy Belgian waffles drizzled with rich chocolate sauce and powdered sugar.", imageId: "photo-1587314168485-3236d6710814", price: 169, calories: 610, protein: 8 },
        { name: "Strawberry Frosted Cupcake", description: "Moist vanilla cupcake topped with a swirl of sweet strawberry buttercream and sprinkles.", imageId: "photo-1550617931-e17a7b70dce2", price: 89, calories: 290, protein: 3 },
        { name: "Blueberry Pancake Stack", description: "Three fluffy buttermilk pancakes filled with fresh blueberries, served with maple syrup and butter.", imageId: "photo-1567620905732-2d1ec7ab7445", price: 179, calories: 520, protein: 9 },
        { name: "Double Choco Chip Cookies", description: "Two freshly baked soft-baked cookies packed with premium milk and dark chocolate chips.", imageId: "photo-1499636136210-6f4ee915583e", price: 79, calories: 360, protein: 4 },
        { name: "Triple Chocolate Mousse", description: "A light, airy cup layered with dark, milk, and white chocolate mousse.", imageId: "photo-1541795795328-f073b763494e", price: 139, calories: 380, protein: 5 },
        { name: "Warm Apple Pie", description: "Traditional spiced apple filling in a flaky, buttery crust, served warm.", imageId: "photo-1509440159596-0249088772ff", price: 159, calories: 420, protein: 4 },
        { name: "Churros with Caramel Sauce", description: "Four crispy, golden fried churros coated in cinnamon sugar, served with warm dulce de leche dip.", imageId: "photo-1551024506-0bccd828d307", price: 139, calories: 460, protein: 5 },
        { name: "Red Velvet Cake Slice", description: "A slice of moist red velvet cake layered with sweet and tangy cream cheese frosting.", imageId: "photo-1578985545062-69928b1d9587", price: 169, calories: 540, protein: 6 },
        { name: "Premium French Macarons", description: "Box of five delicate assorted macarons (raspberry, pistachio, vanilla, chocolate, and lemon).", imageId: "photo-1511081692775-0574dba7741e", price: 249, calories: 390, protein: 7 },
    ],
    6: [
        { name: "Signature Cold Brew Coffee", description: "Slow-steeped organic coffee beans served over ice, smooth and naturally sweet.", imageId: "photo-1517701604599-bb29b565090c", price: 149, calories: 5, protein: 0 },
        { name: "Strawberry Milkshake", description: "Creamy vanilla ice cream blended with fresh strawberries and topped with whipped cream.", imageId: "photo-1579954115545-a95591f28bfc", price: 179, calories: 420, protein: 7 },
        { name: "Fresh Mint Lemonade", description: "Freshly squeezed lemon juice, crushed mint leaves, sugar syrup, blended with ice.", imageId: "photo-1513558161293-cdaf765ed2fd", price: 119, calories: 120, protein: 0 },
        { name: "Classic Virgin Mojito", description: "Muddled lime wedges and mint leaves, sugar, topped with sparkling soda and ice.", imageId: "photo-1514362545857-3bc16c4c7d1b", price: 129, calories: 95, protein: 0 },
        { name: "Mango Paradise Smoothie", description: "A refreshing tropical blend of fresh mango pulp, Greek yogurt, honey, and milk.", imageId: "photo-1553530979-7ee52a2670c4", price: 169, calories: 250, protein: 6 },
        { name: "Peach Iced Tea", description: "Brewed black tea infused with sweet peach syrup, served chilled over ice with lemon slices.", imageId: "photo-1556679343-c7306c1976bc", price: 109, calories: 80, protein: 0 },
        { name: "Espresso Macchiato", description: "A double shot of espresso marked with a small dollop of warm, frothed milk.", imageId: "photo-1509042239860-f550ce710b93", price: 99, calories: 15, protein: 1 },
        { name: "Hot Cafe Latte", description: "Rich espresso combined with steamed milk and topped with a light layer of foam.", imageId: "photo-1541167760496-1628856ab772", price: 129, calories: 150, protein: 8 },
        { name: "Creamy Cappuccino", description: "Equal parts espresso, steamed milk, and thick milk foam, dusted with cocoa powder.", imageId: "photo-1572490122747-3968b75cc699", price: 129, calories: 130, protein: 7 },
        { name: "Fresh Squeezed Orange Juice", description: "100% pure orange juice freshly squeezed daily, served cold.", imageId: "photo-1621506289937-a8e4df240d0b", price: 139, calories: 110, protein: 2 },
        { name: "Green Booster Juice", description: "Healthy cold-pressed juice made with green apple, cucumber, celery, spinach, and ginger.", imageId: "photo-1525385133336-254847240f92", price: 159, calories: 85, protein: 2 },
        { name: "Organic Green Tea", description: "Steeped premium organic Japanese green tea leaves, rich in antioxidants.", imageId: "photo-1576092768241-dec231879fc3", price: 89, calories: 0, protein: 0 },
        { name: "Lemon Sparkling Water", description: "Zero calorie carbonated water with a refreshing splash of natural lemon juice.", imageId: "photo-1607623814075-e51df1bdc82f", price: 79, calories: 0, protein: 0 },
        { name: "Rich Hot Chocolate", description: "Creamy steamed milk blended with premium dark chocolate, topped with marshmallows.", imageId: "photo-1538587888044-79f13ddd7e49", price: 149, calories: 340, protein: 9 },
        { name: "Diet Cola Can", description: "Chilled 330ml can of sugar-free diet cola.", imageId: "photo-1622483767028-3f66f32aef97", price: 59, calories: 0, protein: 0 },
    ],
    7: [
        { name: "Triple Decker Club Sandwich", description: "Toasted bread layers with grilled chicken breast, bacon, fried egg, lettuce, tomato, and mayo, served with fries.", imageId: "photo-1538220856186-0be0c085984d", price: 279, calories: 750, protein: 35 },
        { name: "Avocado Veggie Sandwich", description: "Whole wheat bread loaded with mashed avocado, cucumber, alfalfa sprouts, tomato slices, and hummus.", imageId: "photo-1619860860774-1e2e17343432", price: 219, calories: 420, protein: 11 },
        { name: "Crispy Buttermilk Chicken Sandwich", description: "Deep-fried chicken breast, spicy pickles, coleslaw, and honey mustard on a toasted brioche bun.", imageId: "photo-1601205285953-e9a4ee761a6b", price: 259, calories: 690, protein: 28 },
        { name: "Grilled Caprese Panini", description: "Sourdough bread pressed with basil pesto, fresh mozzarella cheese, sliced tomatoes, and balsamic glaze.", imageId: "photo-1521390188846-e2a3a97453a0", price: 239, calories: 510, protein: 18 },
        { name: "Paneer Tikka Sandwich", description: "Grilled bread stuffed with marinated spicy paneer cubes, capsicum, onions, and mint chutney.", imageId: "photo-1539252554453-80ab65ce3586", price: 229, calories: 560, protein: 20 },
        { name: "Classic Grilled Cheese", description: "Toasted white bread oozing with melted cheddar, Monterey Jack, and Swiss cheeses, served with tomato soup dip.", imageId: "photo-1509722747041-616f39b57569", price: 189, calories: 590, protein: 19 },
        { name: "Spicy Tuna Melt", description: "Tuna salad, chopped celery, jalapenos, and melted cheddar cheese on toasted rye bread.", imageId: "photo-1627308595229-7830a5c91f9f", price: 249, calories: 530, protein: 26 },
        { name: "Tandoori Chicken Wrap", description: "Flour tortilla wrap filled with tandoori chicken strips, onions, peppers, and green yogurt sauce.", imageId: "photo-1592415499556-74ad99c7c319", price: 259, calories: 480, protein: 29 },
        { name: "Italian Sub Panini", description: "Salami, pepperoni, ham, provolone cheese, lettuce, tomato, banana peppers, and Italian vinaigrette on a baguette.", imageId: "photo-1540713434306-585b1c667591", price: 289, calories: 790, protein: 32 },
        { name: "Egg Salad & Mayo Sandwich", description: "Chilled egg salad made with boiled eggs, green onions, and creamy mayo in soft white sandwich bread.", imageId: "photo-1621800041139-796755494ebb", price: 179, calories: 460, protein: 15 },
        { name: "Turkey & Swiss Sandwich", description: "Sliced smoked turkey breast, Swiss cheese, honey mustard, lettuce, and tomato on multigrain bread.", imageId: "photo-1619051030114-142270bb3f2f", price: 239, calories: 430, protein: 24 },
        { name: "Pesto Mozzarella Sandwich", description: "Ciabatta bread, creamy basil pesto spread, fresh mozzarella, sun-dried tomatoes, and wild rocket.", imageId: "photo-1553621042-f6e147245754", price: 229, calories: 520, protein: 16 },
        { name: "Philly Cheesesteak Sandwich", description: "Sautéed shaved beef, caramelized onions, green bell peppers, melted Provolone cheese in a hoagie roll.", imageId: "photo-1588720347200-a4d588e14b8a", price: 329, calories: 810, protein: 38 },
        { name: "Peanut Butter Banana Toast", description: "Thick sourdough toast topped with creamy peanut butter, banana slices, chia seeds, and honey drizzle.", imageId: "photo-1550507992-eb63ffee0847", price: 149, calories: 390, protein: 11 },
        { name: "Garden Hummus Veggie Wrap", description: "Spinach wrap stuffed with garlic hummus, carrots, cucumber, bell peppers, spinach, and feta.", imageId: "photo-1549611016-3a70d82b5040", price: 199, calories: 360, protein: 10 },
    ],
    8: [
        { name: "Classic Pancake Stack", description: "Three light and fluffy buttermilk pancakes served with butter and pure Canadian maple syrup.", imageId: "photo-1528207776546-365bb710ee93", price: 199, calories: 480, protein: 8 },
        { name: "Brioche French Toast", description: "Thick slices of brioche dipped in egg batter, griddled golden brown, dusted with cinnamon sugar.", imageId: "photo-1484723091739-30a097e8f929", price: 219, calories: 530, protein: 10 },
        { name: "Three Egg Classic Omelette", description: "Fluffy three-egg omelette stuffed with cheddar cheese, mushrooms, onions, and bell peppers, with toast.", imageId: "photo-1494597564530-871f2b93ac55", price: 189, calories: 410, protein: 21 },
        { name: "Loaded Breakfast Burrito", description: "Scrambled eggs, spicy chorizo sausage, black beans, potatoes, cheddar cheese wrapped in a flour tortilla.", imageId: "photo-1624371414361-e6e224c80d22", price: 239, calories: 690, protein: 25 },
        { name: "Indian Spiced Poha", description: "Flattened rice flakes tempered with mustard seeds, curry leaves, turmeric, peanuts, and green chilies.", imageId: "photo-1613556536644-8d59067f8fed", price: 129, calories: 280, protein: 5 },
        { name: "Semolina Vegetable Upma", description: "Thick semolina porridge cooked with roasted mustard seeds, carrots, peas, and cashew nuts.", imageId: "photo-1589301760014-d929f3979dbc", price: 129, calories: 290, protein: 6 },
        { name: "Aloo Paratha with Curd", description: "Whole wheat flatbread stuffed with spiced mashed potatoes, griddled with butter, served with yogurt and pickle.", imageId: "photo-1601050690597-df056fb4ce78", price: 149, calories: 480, protein: 9 },
        { name: "Steamed Rice Idli", description: "Three soft, pillowy steamed rice cakes served with traditional lentil sambar and coconut chutney.", imageId: "photo-1668236543090-82eba5ee5976", price: 119, calories: 220, protein: 6 },
        { name: "Crispy Masala Dosa", description: "Thin, crispy fermented rice crepe filled with spiced potato mash, served with sambar and chutneys.", imageId: "photo-1589301760014-d929f3979dbc", price: 159, calories: 340, protein: 7 },
        { name: "Egg McMuffin Special", description: "Toasted English muffin, fried egg, Canadian bacon, and melted American cheese.", imageId: "photo-1513442547838-c54d6c3c2988", price: 169, calories: 310, protein: 17 },
        { name: "Continental Breakfast Platter", description: "Scrambled eggs, two strips of bacon, hash brown, and a butter croissant with jam.", imageId: "photo-1525351484163-7529414344d8", price: 279, calories: 690, protein: 22 },
        { name: "Avocado Poached Eggs", description: "Two poached eggs, mashed seasoned avocado, cherry tomatoes on toasted whole grain sourdough.", imageId: "photo-1504754524776-8f4f37790ca0", price: 259, calories: 420, protein: 18 },
        { name: "Baked Beans on Sourdough", description: "Sweet and smoky baked navy beans piled onto thick buttered sourdough toast.", imageId: "photo-1541832676-9b763b0239ab", price: 149, calories: 380, protein: 12 },
        { name: "Mixed Berry Waffles", description: "Two golden waffles topped with fresh strawberries, blueberries, raspberries, whipped cream, and honey.", imageId: "photo-1517433367423-c7e5b0f35086", price: 199, calories: 540, protein: 8 },
        { name: "Greek Yogurt Granola Bowl", description: "Thick Greek yogurt topped with crunchy organic oat granola, mixed seeds, fresh berries, and honey.", imageId: "photo-1540420773420-3366772f4999", price: 189, calories: 310, protein: 14 },
    ],
    9: [
        { name: "Signature Protein Bowl", description: "Grilled chicken, quinoa, hard-boiled egg, broccoli, sweet potatoes, and avocado dressing.", imageId: "photo-1546069901-ba9599a7e63c", price: 299, calories: 620, protein: 42 },
        { name: "Teriyaki Chicken Bowl", description: "Grilled chicken breast glazed with teriyaki sauce, brown rice, steamed broccoli, edamame, and carrots.", imageId: "photo-1512621776951-a57141f2eefd", price: 289, calories: 580, protein: 35 },
        { name: "Vegan Buddha Bowl", description: "Roasted chickpeas, sweet potato chunks, avocado, spinach, red cabbage, tahini dressing on brown rice.", imageId: "photo-1511690656952-34342bb7c2f2", price: 269, calories: 480, protein: 15 },
        { name: "Brown Rice Avocado Bowl", description: "Seasoned black beans, brown rice, fresh salsa, corn, sliced avocado, cilantro lime crema.", imageId: "photo-1540420773420-3366772f4999", price: 249, calories: 510, protein: 12 },
        { name: "Quinoa Harvest Bowl", description: "Quinoa, roasted butternut squash, apples, pecans, goat cheese, baby spinach, with maple vinaigrette.", imageId: "photo-1512621776951-a57141f2eefd", price: 279, calories: 460, protein: 11 },
        { name: "Sesame Tofu Bowl", description: "Pan-seared tofu cubes in sesame soy glaze, quinoa, cucumber, edamame, shredded carrots, nori flakes.", imageId: "photo-1623428187969-5da2d8a7f237", price: 239, calories: 430, protein: 18 },
        { name: "Mediterranean Hummus Bowl", description: "Quinoa, cherry tomatoes, cucumbers, Kalamata olives, hummus, falafel, feta, and tzatziki drizzle.", imageId: "photo-1543339308-43e59d6b73a6", price: 269, calories: 490, protein: 14 },
        { name: "Southwest Chipotle Bowl", description: "Romaine lettuce, black beans, corn, grilled chicken, cheddar, tortilla strips, chipotle dressing.", imageId: "photo-1529042410759-befb1204b468", price: 289, calories: 590, protein: 33 },
        { name: "Ahi Tuna Poke Bowl", description: "Sashimi-grade ahi tuna cubes, white rice, cucumber, avocado, edamame, green onions, spicy mayo, soy sauce.", imageId: "photo-1504674900247-0877df9cc836", price: 399, calories: 540, protein: 29 },
        { name: "Peanut Noodle Bowl", description: "Whole wheat noodles, red bell pepper, shredded cabbage, carrots, edamame, spicy peanut sauce, crushed peanuts.", imageId: "photo-1615485290382-441e4d049cb5", price: 239, calories: 560, protein: 16 },
        { name: "Crispy Falafel & Tahini Bowl", description: "Four baked herb falafels, mixed greens, tabbouleh salad, pickled onions, hummus, and creamy tahini.", imageId: "photo-1543339308-43e59d6b73a6", price: 249, calories: 450, protein: 12 },
        { name: "Sweet Potato & Kale Bowl", description: "Roasted sweet potatoes, sautéed curly kale, red quinoa, pumpkin seeds, dried cranberries, balsamic glaze.", imageId: "photo-1505576399279-565b52d4ac71", price: 239, calories: 410, protein: 9 },
        { name: "Smoked Salmon Poke Bowl", description: "Cold smoked salmon slices, brown rice, avocado, cucumber, seaweed salad, sesame seeds, sriracha mayo.", imageId: "photo-1607532941433-304659e8198a", price: 379, calories: 510, protein: 26 },
        { name: "Spicy Paneer Bowl", description: "Grilled paneer cubes, quinoa, roasted bell peppers, onions, spinach, and spicy cilantro chutney.", imageId: "photo-1512621776951-a57141f2eefd", price: 279, calories: 550, protein: 22 },
        { name: "Keto Bacon Egg Bowl", description: "Baby spinach, hard-boiled eggs, crispy bacon bits, avocado, cherry tomatoes, blue cheese, olive oil.", imageId: "photo-1540420773420-3366772f4999", price: 289, calories: 640, protein: 28 },
    ],
    10: [
        { name: "Shoyu Ramen Bowl", description: "Rich soy sauce broth, ramen noodles, tender braised pork belly (chashu), soft-boiled egg, nori, green onions.", imageId: "photo-1569718212165-3a8278d5f624", price: 349, calories: 780, protein: 32 },
        { name: "Fresh Salmon Sushi Roll", description: "Eight pieces of salmon and avocado rolls wrapped in seasoned sushi rice and seaweed sheet, served with ginger & wasabi.", imageId: "photo-1579871494447-9811cf80d66c", price: 399, calories: 360, protein: 18 },
        { name: "Hakka Fried Veg Noodles", description: "Wok-tossed noodles with colorful julienne carrots, cabbage, bell peppers, soy sauce, and green onions.", imageId: "photo-1585032226651-759b368d7246", price: 219, calories: 480, protein: 10 },
        { name: "Egg Fried Rice", description: "Fragrant jasmine rice wok-fried with scrambled eggs, sweet green peas, carrots, soy sauce, and white pepper.", imageId: "photo-1512058564366-18510be2db19", price: 199, calories: 420, protein: 12 },
        { name: "Chicken Teriyaki Rice Bowl", description: "Pan-seared chicken thighs in sweet house teriyaki glaze, served on steamed rice with green broccoli.", imageId: "photo-1526318896980-cf78c088247c", price: 289, calories: 610, protein: 29 },
        { name: "Spicy Thai Green Curry", description: "Rich coconut milk green curry paste with bamboo shoots, baby corn, red peppers, and basil, served with jasmine rice.", imageId: "photo-1563245372-f21724e3856d", price: 329, calories: 650, protein: 14 },
        { name: "Vegetable Manchurian Gravy", description: "Deep-fried mixed veg dumplings simmered in a tangy, spicy, and savory soy garlic sauce.", imageId: "photo-1541832676-9b763b0239ab", price: 239, calories: 380, protein: 8 },
        { name: "Steamed Dim Sum Platter", description: "Six pieces of delicate steamed dumplings (3 chicken, 3 vegetable) served with house chili dip.", imageId: "photo-1604152135912-04a022e23696", price: 199, calories: 240, protein: 14 },
        { name: "Crispy Spring Rolls", description: "Four golden-fried crispy wrappers filled with shredded seasoned cabbage, carrots, glass noodles, sweet chili sauce.", imageId: "photo-1534422298391-e4f8c172dddb", price: 149, calories: 290, protein: 5 },
        { name: "Korean Beef Bibimbap", description: "Jasmine rice topped with seasoned beef, sautéed carrots, spinach, bean sprouts, fried egg, and spicy gochujang paste.", imageId: "photo-1525755662778-989d0524087e", price: 359, calories: 690, protein: 34 },
        { name: "Spicy Pad Thai Noodles", description: "Stir-fried flat rice noodles with egg, tofu, bean sprouts, crushed peanuts, in a sweet and sour tamarind sauce.", imageId: "photo-1626804475315-9644b37a2fe4", price: 279, calories: 580, protein: 16 },
        { name: "Kung Pao Chicken", description: "Stir-fried chicken chunks, dried red chilies, bell peppers, onions, and crunchy peanuts in a spicy dark sauce.", imageId: "photo-1569562211093-4ed0d0758f12", price: 319, calories: 540, protein: 28 },
        { name: "Sweet & Sour Chicken", description: "Tempura battered chicken breast pieces, pineapple chunks, bell peppers, onions in a tangy sweet & sour sauce.", imageId: "photo-1512058564366-18510be2db19", price: 299, calories: 610, protein: 24 },
        { name: "Japanese Katsu Curry", description: "Crispy panko-breaded chicken breast cutlet served with thick, savory Japanese curry sauce and steamed rice.", imageId: "photo-1552611052-33e04de081de", price: 349, calories: 840, protein: 35 },
        { name: "Spicy Tom Yum Soup", description: "Authentic hot and sour Thai soup with prawns, lemongrass, kaffir lime leaves, galangal, fresh lime, and mushrooms.", imageId: "photo-1569718212165-3a8278d5f624", price: 249, calories: 190, protein: 16 },
    ],
};

export const menu: any[] = [];

let currentId = 1;

for (const [categoryId, foods] of Object.entries(categorySeeds)) {
    const catId = Number(categoryId);
    foods.forEach((food) => {
        menu.push({
            id: currentId++,
            name: food.name,
            description: food.description,
            image_url: `https://images.unsplash.com/${food.imageId}?w=600&auto=format&fit=crop&q=80`,
            rating: 4.0 + (currentId % 10) / 10,
            calories: food.calories,
            protein: food.protein,
            price: food.price,
            category_id: catId,
        });
    });
}

// Generate menu customizations deterministically
export const menuCustomizations: { menu_id: number; customization_id: number }[] = [];

menu.forEach((item) => {
    const applicableCustomizations: number[] = [];

    if (item.category_id === 1) {
        // Burgers: sizes, cheese, bacon, patty, jalapenos, sauces
        applicableCustomizations.push(11, 12, 13, 1, 2, 3, 4, 6);
    } else if (item.category_id === 2) {
        // Pizza: sizes, extra cheese, bacon, mushrooms, jalapenos, garlic bread combo
        applicableCustomizations.push(11, 12, 13, 1, 3, 4, 5, 6, 24);
    } else if (item.category_id === 3) {
        // Pasta: extra cheese, chicken, garlic bread, mushrooms, no onion/garlic
        applicableCustomizations.push(1, 8, 24, 5, 15, 16);
    } else if (item.category_id === 4) {
        // Salads: avocado, egg, chicken, low fat, gluten free
        applicableCustomizations.push(10, 9, 8, 19, 17);
    } else if (item.category_id === 5) {
        // Desserts: ice cream, milkshake, brownie combos
        applicableCustomizations.push(26, 27, 28);
    } else if (item.category_id === 6) {
        // Beverages: sizes, coke/pepsi/milkshake/coffee/brownie combos
        applicableCustomizations.push(11, 12, 13, 21, 22, 26, 30);
    } else if (item.category_id === 7) {
        // Sandwiches: extra cheese, bacon, egg, avocado, fries combo
        applicableCustomizations.push(1, 4, 9, 10, 23);
    } else if (item.category_id === 8) {
        // Breakfast: egg, bacon, avocado, coffee combo
        applicableCustomizations.push(9, 4, 10, 30);
    } else if (item.category_id === 9) {
        // Healthy Bowls: avocado, chicken, egg, vegan, low fat, extra protein
        applicableCustomizations.push(10, 8, 9, 18, 19, 20);
    } else if (item.category_id === 10) {
        // Asian: extra spicy, no onion, spring roll combo
        applicableCustomizations.push(14, 15, 29);
    }

    applicableCustomizations.forEach((customizationId) => {
        menuCustomizations.push({
            menu_id: item.id,
            customization_id: customizationId,
        });
    });
});
