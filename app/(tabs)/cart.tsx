import CartItem from "@/components/CartItem";
import CustomHeader from "@/components/CustomHeader";
import { useCartStore } from "@/store/cart.store";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
    const { items, clearCart } = useCartStore();

    const totalPrice = items.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <SafeAreaView className="bg-white h-full pb-32">
            <CustomHeader title="My Cart" />

            <FlatList
                data={items}
                extraData={items}
                keyExtractor={(item) => `${item.id}-${(item.customizations || []).map(c => c.id).join('_')}`}
                renderItem={({ item }) => <CartItem item={item} />}
                contentContainerClassName="px-5 py-4 gap-y-4"
                ListEmptyComponent={() => (
                    <View className="flex-1 items-center justify-center py-20">
                        <Text className="text-gray-200 base-medium text-center">
                            Your cart is empty. Add some delicious dishes!
                        </Text>
                    </View>
                )}
                ListFooterComponent={() => items.length > 0 && (
                    <View className="mt-8 gap-y-6">
                        <View className="flex flex-row justify-between items-center border-t border-gray-100 pt-4">
                            <Text className="base-medium text-gray-200">Total Price</Text>
                            <Text className="text-2xl font-quicksand-bold text-primary">${totalPrice}</Text>
                        </View>

                        <TouchableOpacity
                            onPress={clearCart}
                            className="bg-red-500/10 rounded-2xl py-3 items-center justify-center"
                        >
                            <Text className="base-bold text-red-500">Clear Cart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-primary rounded-2xl py-4 items-center justify-center shadow-lg"
                        >
                            <Text className="base-bold text-white text-lg">Proceed to Checkout</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Cart;