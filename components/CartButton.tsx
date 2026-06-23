import { images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CartButton() {
    const totalItem = 10;
    return (
        <TouchableOpacity 
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-dark-100" 
            onPress={() => {}}
        >
            <Image 
                source={images.bag} 
                className="w-5 h-5" 
                resizeMode="contain" 
                tintColor="white" 
            />

            {totalItem > 0 && (
                <View className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                    <Text className="text-white text-xs font-quicksand-bold">
                        {totalItem}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
