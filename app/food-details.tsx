import CartButton from "@/components/CartButton";
import { images } from "@/constants";
import { getMenuItemById, getMenuItemCustomizations } from "@/lib/supabase";
import { useCartStore } from "@/store/cart.store";
import { CartCustomization, MenuItem } from "@/type";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItem } = useCartStore();

  const [item, setItem] = useState<MenuItem | null>(null);
  const [customizations, setCustomizations] = useState<CartCustomization[]>([]);
  const [loading, setLoading] = useState(true);

  // Selections state
  const [selectedSize, setSelectedSize] = useState<CartCustomization | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<CartCustomization[]>([]);
  const [quantity, setQuantity] = useState(1);

  // Fetch food item details
  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return;
      try {
        const foodItem = await getMenuItemById(Number(id));
        setItem(foodItem);

        const options = await getMenuItemCustomizations(Number(id));
        setCustomizations(options);

        // Pre-select first size customization if available
        const sizes = options.filter(c => c.type === "size");
        if (sizes.length > 0) {
          setSelectedSize(sizes[0]);
        }
      } catch (error) {
        console.error("Failed to load details:", error);
        Alert.alert("Error", "Failed to load food details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#FE8C00" />
      </View>
    );
  }

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5">
        <Text className="base-bold text-gray-500">Food item not found.</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4 bg-primary px-5 py-2.5 rounded-full">
          <Text className="text-white base-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Group customizations by type
  const groupCustomizations = () => {
    const groups: Record<string, CartCustomization[]> = {};
    customizations.forEach(c => {
      const type = c.type || "other";
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(c);
    });
    return groups;
  };

  const grouped = groupCustomizations();

  // Handle checking extras
  const toggleExtra = (extra: CartCustomization) => {
    const exists = selectedExtras.find(e => e.id.toString() === extra.id.toString());
    if (exists) {
      setSelectedExtras(prev => prev.filter(e => e.id.toString() !== extra.id.toString()));
    } else {
      setSelectedExtras(prev => [...prev, extra]);
    }
  };

  // Pricing calculations
  const basePrice = item.price || 0;
  const sizePrice = selectedSize ? selectedSize.price : 0;
  const extrasPrice = selectedExtras.reduce((sum, c) => sum + (c.price || 0), 0);
  const singleItemPrice = basePrice + sizePrice + extrasPrice;
  const totalPrice = singleItemPrice * quantity;

  // Add item with customizations to store
  const handleAddToCart = () => {
    const activeCustomizations = [
      selectedSize,
      ...selectedExtras
    ].filter(Boolean) as CartCustomization[];

    addItem({
      id: item.id.toString(),
      name: item.name,
      price: singleItemPrice,
      image_url: item.image_url,
      customizations: activeCustomizations,
      quantity: quantity
    });

    Alert.alert("Success", `${item.name} added to cart!`, [
      { text: "OK", onPress: () => router.back() }
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      {/* Floating Header */}
      <View className="absolute top-10 left-5 right-5 z-20 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="size-10 rounded-full bg-white flex items-center justify-center shadow-md shadow-black/25"
        >
          <Image source={images.arrowBack} className="size-5" resizeMode="contain" tintColor="#1A1D1E" />
        </TouchableOpacity>

        <View className="bg-white rounded-full p-0.5 shadow-md shadow-black/25">
          <CartButton />
        </View>
      </View>

      <ScrollView className="flex-1 pb-32" showsVerticalScrollIndicator={false}>
        {/* Large Food Image */}
        <Image
          source={{ uri: item.image_url }}
          className="w-full h-80 bg-gray-100"
          resizeMode="cover"
        />

        {/* Content Box */}
        <View className="px-5 pt-6 pb-24">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-2xl font-quicksand-bold text-dark-100 flex-1 mr-3" numberOfLines={2}>
              {item.name}
            </Text>
            <View className="flex-row items-center bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
              <Image source={images.star} className="size-3.5 mr-1" resizeMode="contain" tintColor="#FFB800" />
              <Text className="text-xs font-quicksand-bold text-amber-700">{item.rating || "4.5"}</Text>
            </View>
          </View>

          {/* Badges / Calories & Protein */}
          <View className="flex-row items-center gap-x-3 mb-4">
            <View className="bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              <Text className="text-xs font-quicksand-semibold text-orange-600">{item.calories || 320} kcal</Text>
            </View>
            <View className="bg-green-50 border border-green-100 px-3 py-1 rounded-full">
              <Text className="text-xs font-quicksand-semibold text-green-600">{item.protein || 12}g Protein</Text>
            </View>
          </View>

          {/* Description */}
          <Text className="body-regular text-gray-200 leading-relaxed mb-6">
            {item.description || "Indulge in our tasty gourmet option prepared fresh with natural premium ingredients, seasoned to perfection."}
          </Text>

          <View className="h-[1px] bg-gray-100 w-full mb-6" />

          {/* Customization Options */}
          {Object.keys(grouped).map(type => {
            const optionsList = grouped[type];
            const title = type.charAt(0).toUpperCase() + type.slice(1);
            const isSize = type === "size";

            return (
              <View key={type} className="mb-6">
                <Text className="base-bold text-dark-100 mb-3">{title}</Text>

                <View className="bg-gray-50/50 border border-gray-100 rounded-3xl p-4 gap-y-3.5">
                  {optionsList.map(opt => {
                    const isChecked = isSize
                      ? selectedSize?.id.toString() === opt.id.toString()
                      : !!selectedExtras.find(e => e.id.toString() === opt.id.toString());

                    return (
                      <TouchableOpacity
                        key={opt.id.toString()}
                        onPress={() => isSize ? setSelectedSize(opt) : toggleExtra(opt)}
                        className="flex-row items-center justify-between"
                        activeOpacity={0.7}
                      >
                        <View className="flex-row items-center gap-x-3">
                          {/* Custom Radio/Checkbox button */}
                          <View
                            className={`size-5 rounded-md border items-center justify-center ${isSize ? "rounded-full" : ""
                              } ${isChecked ? "bg-primary border-primary" : "border-gray-300"}`}
                          >
                            {isChecked && (
                              <View
                                className={`size-2.5 bg-white ${isSize ? "rounded-full" : "rounded-sm"
                                  }`}
                              />
                            )}
                          </View>
                          <Text className="paragraph-semibold text-gray-700">{opt.name}</Text>
                        </View>
                        <Text className="body-medium text-gray-500">
                          {opt.price > 0 ? `+$${opt.price}` : "Free"}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions Bar */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 flex-row items-center justify-between gap-x-4 shadow-xl"
        style={{ paddingBottom: 24 }}
      >
        {/* Quantity selector */}
        <View className="flex-row items-center justify-between bg-primary/10 rounded-2xl border border-primary/20 px-4 py-2 gap-x-4 min-w-[120px]">
          <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))} className="p-1">
            <Text className="text-primary font-quicksand-bold text-xl px-1">-</Text>
          </TouchableOpacity>
          <Text className="text-primary font-quicksand-bold text-lg">{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(q => q + 1)} className="p-1">
            <Text className="text-primary font-quicksand-bold text-xl px-1">+</Text>
          </TouchableOpacity>
        </View>

        {/* Add to Cart CTA */}
        <TouchableOpacity
          onPress={handleAddToCart}
          className="flex-1 bg-primary rounded-2xl py-4 items-center justify-center shadow-lg flex-row gap-x-2"
        >
          <Text className="base-bold text-white text-lg">Add to Cart</Text>
          <Text className="text-white/60 base-medium text-lg">•</Text>
          <Text className="base-bold text-white text-lg">${totalPrice}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FoodDetails;
