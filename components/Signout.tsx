import { images } from "@/constants";
import { signOut } from "@/lib/supabase";
import { router } from "expo-router";
import { Alert, Image, TouchableOpacity } from "react-native";
import { useAuthStore } from "@/store/auth.store";

export default function Signout() {
    const { setIsLogged, setUser } = useAuthStore();

    const signoutUser = async () => {
        try {
            await signOut();
            setUser(null);
            setIsLogged(false);
            router.replace('/sign-in');
        } catch (error: any) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <TouchableOpacity 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50" 
            onPress={signoutUser}
            activeOpacity={0.7}
        >
            <Image 
                source={images.logout} 
                className="w-5 h-5" 
                resizeMode="contain" 
                tintColor="#FF6F61" 
            />
        </TouchableOpacity>
    );
}
