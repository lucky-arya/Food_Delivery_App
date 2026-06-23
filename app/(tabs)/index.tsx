import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from 'clsx';
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  
  
  return (
    <SafeAreaView className="flex-1 bg-white">

      
      <FlatList
      data={offers}
      renderItem={({item, index}) => {
        const isEven = index % 2 === 0;
        return (
          <View>
            <Pressable 
              className={cn(
                "w-full h-48 my-3 rounded-2xl overflow-hidden shadow-lg flex items-center justify-between", 
                isEven ? 'flex-row-reverse' : 'flex-row'
              )} 
              style={{backgroundColor: item.color}}
              android_ripple={{color : '#ffff22'}}
            >
              {({pressed}) => (
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
      ListHeaderComponent={()=>(
        <View className="flex flex-row items-center justify-between w-full my-5 px-5">
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
          <CartButton />
        </View>
      )}
      />
    </SafeAreaView>
  );
}
