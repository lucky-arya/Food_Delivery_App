import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import { getCategories } from "@/lib/supabase";
import useSupabase from "@/lib/useSupabase";
import cn from 'clsx';
import { router } from "expo-router";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const getCategoryEmoji = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('burger')) return '🍔';
  if (lower.includes('pizza')) return '🍕';
  if (lower.includes('pasta')) return '🍝';
  if (lower.includes('salad')) return '🥗';
  if (lower.includes('dessert')) return '🍰';
  if (lower.includes('beverage') || lower.includes('drink')) return '🥤';
  if (lower.includes('sandwich')) return '🥪';
  if (lower.includes('wrap')) return '🌯';
  if (lower.includes('burrito')) return '🌯';
  if (lower.includes('breakfast')) return '🍳';
  if (lower.includes('bowl')) return '🥣';
  if (lower.includes('asian') || lower.includes('noodle')) return '🥢';
  return '🍽️';
};

export default function Index() {
  const { data: categories } = useSupabase({ fn: getCategories });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View>
              <Pressable
                className={cn(
                  "w-full h-48 my-3 rounded-2xl overflow-hidden shadow-lg flex items-center justify-between",
                  isEven ? 'flex-row-reverse' : 'flex-row'
                )}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: '#ffff22' }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2 flex items-center justify-center p-2">
                      <Image source={item.image} resizeMode="contain" className="w-full h-full" />
                    </View>
                    <View className={cn(
                      'flex-1 h-full flex flex-col justify-center items-start gap-y-3',
                      isEven ? 'pl-6 pr-4' : 'pr-6 pl-4'
                    )}>
                      <Text className="text-3xl font-quicksand-bold text-white leading-tight" numberOfLines={2}>
                        {item.title}
                      </Text>
                      <Image source={images.arrowRight} className="w-8 h-8" resizeMode="contain" tintColor="white" />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="my-5 px-1">
            {/* Header deliver to section */}
            <View className="flex flex-row items-center justify-between w-full mb-6">
              <View className="flex flex-col items-start justify-center">
                <Text className="text-xs font-quicksand-bold text-primary">
                  DELIVER TO
                </Text>
                <TouchableOpacity className="flex flex-row items-center justify-center gap-x-1 mt-0.5">
                  <Text className="text-base font-quicksand-bold text-dark-100">
                    Noida
                  </Text>
                  <Image source={images.arrowDown} className="w-3 h-3" resizeMode="contain" />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center gap-x-3">
                <CartButton />
              </View>
            </View>

            {/* Categories Section */}
            {categories && categories.length > 0 && (
              <View className="mb-6">
                <Text className="text-xl font-quicksand-bold text-dark-100 mb-4">
                  What's on your mind?
                </Text>
                <FlatList
                  data={categories}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="gap-x-5 pb-2"
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => router.push({ pathname: '/search', params: { category: item.id.toString() } })}
                      className="items-center"
                      activeOpacity={0.7}
                    >
                      <View className="size-16 rounded-full bg-amber-50 flex items-center justify-center mb-2 shadow-sm border border-amber-100">
                        <Text className="text-3xl">{getCategoryEmoji(item.name)}</Text>
                      </View>
                      <Text className="text-xs font-quicksand-medium text-gray-500">
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {/* Offers title */}
            <Text className="text-xl font-quicksand-bold text-dark-100 mb-2">
              Best Offers for You
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
