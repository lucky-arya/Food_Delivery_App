import { useCartStore } from "@/store/cart.store";
import { MenuItem } from "@/type";
import { router } from "expo-router";
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';

const MenuCard = ({ item: { id, image_url, name, price } }: { item: MenuItem }) => {
    const { items, addItem, increaseQty, decreaseQty } = useCartStore();
    
    // Find if the item is in the cart with NO customizations
    const cartItem = items.find(i => i.id === id.toString() && (!i.customizations || i.customizations.length === 0));

    return (
        <View className="menu-card" style={Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787' } : {}}>
            {/* Clickable top area for details */}
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => router.push({ pathname: '/food-details', params: { id } })}
                className="items-center w-full"
                style={{ marginTop: -96 }}
            >
                <Image 
                    source={{ uri: image_url }} 
                    className="size-32 rounded-2xl" 
                    style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 12 }}
                    resizeMode="cover" 
                />
                <Text className="text-center base-bold text-dark-100 mb-1 w-full" numberOfLines={1}>{name}</Text>
                <Text className="body-regular text-gray-200 mb-3">From ${price}</Text>
            </TouchableOpacity>

            {/* Bottom action button area */}
            {cartItem ? (
                <View className="flex-row items-center justify-between bg-primary/10 rounded-full border border-primary/30 px-3 py-1 gap-x-3 mt-1 min-w-[90px]">
                    <TouchableOpacity onPress={() => decreaseQty(id.toString(), [])}>
                        <Text className="text-primary font-quicksand-bold text-lg px-2">-</Text>
                    </TouchableOpacity>
                    <Text className="text-primary font-quicksand-bold text-base">{cartItem.quantity}</Text>
                    <TouchableOpacity onPress={() => increaseQty(id.toString(), [])}>
                        <Text className="text-primary font-quicksand-bold text-lg px-2">+</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity 
                    onPress={() => addItem({ id: id.toString(), name, price, image_url, customizations: [] })}
                    className="bg-primary/5 border border-primary/20 px-5 py-1.5 rounded-full mt-1"
                >
                    <Text className="paragraph-bold text-primary">ADD +</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MenuCard;