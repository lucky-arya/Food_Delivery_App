import React, { useState } from "react";
import { 
  ActivityIndicator, 
  Alert, 
  FlatList, 
  Image, 
  Modal, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/auth.store";
import { signOut, updateProfile } from "@/lib/supabase";
import { images } from "@/constants";

// Predefined premium avatars
const PREDEFINED_AVATARS = [
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Jack",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Milo",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Tigger",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Loki"
];

// Realistic mock order history
const MOCK_ORDERS = [
  {
    id: "ORD-9821",
    date: "24 Jun 2026",
    items: "Classic Cheeseburger + French Fries + Coke",
    price: 377,
    status: "Delivered"
  },
  {
    id: "ORD-8712",
    date: "18 Jun 2026",
    items: "Classic Margherita Pizza + Garlic Bread",
    price: 398,
    status: "Delivered"
  },
  {
    id: "ORD-6510",
    date: "10 Jun 2026",
    items: "Fettuccine Alfredo + Salad",
    price: 324,
    status: "Delivered"
  }
];

// Mock saved addresses
const MOCK_ADDRESSES = [
  { id: "1", type: "Home", address: "Sector 62, Noida, Uttar Pradesh, 201301" },
  { id: "2", type: "Work", address: "Connaught Place, New Delhi, Delhi, 110001" }
];

const Profile = () => {
  const { user, setUser, setIsLogged } = useAuthStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || "");
  const [updating, setUpdating] = useState(false);

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
            setUser(null);
            setIsLogged(false);
          } catch (error: any) {
            Alert.alert("Error", error.message || "Failed to logout");
          }
        }
      }
    ]);
  };

  const handleUpdateProfile = async () => {
    if (!name.trim()) {
      return Alert.alert("Error", "Name cannot be empty");
    }
    if (!user?.id) return;

    setUpdating(true);
    try {
      await updateProfile(user.id, {
        name: name.trim(),
        avatar: selectedAvatar
      });

      setUser({
        ...user,
        name: name.trim(),
        avatar: selectedAvatar
      });

      Alert.alert("Success", "Profile updated successfully!");
      setModalVisible(false);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const openEditModal = () => {
    setName(user?.name || "");
    setSelectedAvatar(user?.avatar || "");
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Profile Card Header */}
        <View className="bg-primary/5 pb-8 pt-4 items-center rounded-b-[40px] border-b border-primary/10 shadow-sm">
          <View className="relative">
            <Image 
              source={{ uri: user?.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=User" }} 
              className="size-24 rounded-full border-4 border-white shadow-md bg-white" 
              resizeMode="cover"
            />
            <TouchableOpacity 
              onPress={openEditModal}
              className="absolute bottom-0 right-0 bg-primary rounded-full size-8 items-center justify-center border-2 border-white shadow"
            >
              <Image source={images.pencil} className="size-4" tintColor="white" resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <Text className="text-xl font-quicksand-bold text-dark-100 mt-4">
            {user?.name || "User"}
          </Text>
          <Text className="text-sm font-quicksand-medium text-gray-400 mt-1">
            {user?.email || "user@example.com"}
          </Text>

          <TouchableOpacity 
            onPress={openEditModal}
            className="mt-4 bg-white border border-primary/30 px-5 py-2 rounded-full shadow-sm"
          >
            <Text className="text-xs font-quicksand-bold text-primary">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Saved Addresses Section */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-quicksand-bold text-dark-100 mb-3">Saved Addresses</Text>
          
          <View className="gap-y-3">
            {MOCK_ADDRESSES.map((item) => (
              <View key={item.id} className="flex-row bg-gray-50 border border-gray-100 rounded-2xl p-4 items-center">
                <View className="size-10 rounded-full bg-primary/10 items-center justify-center mr-3">
                  <Image source={images.location} className="size-5" tintColor="#FE8C00" resizeMode="contain" />
                </View>
                <View className="flex-1">
                  <Text className="paragraph-bold text-dark-100">{item.type}</Text>
                  <Text className="text-xs font-quicksand-semibold text-gray-500 mt-1" numberOfLines={1}>
                    {item.address}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Order History Section */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-quicksand-bold text-dark-100 mb-3">Past Orders</Text>

          <View className="gap-y-4">
            {MOCK_ORDERS.map((order) => (
              <View key={order.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <View className="flex-row justify-between items-center pb-2 border-b border-gray-50 mb-3">
                  <View>
                    <Text className="paragraph-bold text-dark-100">{order.id}</Text>
                    <Text className="text-xs font-quicksand-medium text-gray-400 mt-0.5">{order.date}</Text>
                  </View>
                  <View className="bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-full">
                    <Text className="text-xs font-quicksand-bold text-green-700">{order.status}</Text>
                  </View>
                </View>
                
                <Text className="text-xs font-quicksand-semibold text-gray-600 mb-3" numberOfLines={2}>
                  {order.items}
                </Text>

                <View className="flex-row justify-between items-center">
                  <Text className="text-xs font-quicksand-bold text-gray-400">Total Bill</Text>
                  <Text className="paragraph-bold text-primary">${order.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Logout Button */}
        <View className="px-5 mt-8">
          <TouchableOpacity 
            onPress={handleLogout}
            className="bg-red-500/10 border border-red-500/20 rounded-2xl py-4 items-center justify-center flex-row gap-x-2 shadow-sm"
          >
            <Image source={images.logout} className="size-5" tintColor="#EF4444" resizeMode="contain" />
            <Text className="base-bold text-red-500">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-[40px] px-6 pt-6 pb-10 border-t border-gray-100 shadow-xl">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="h3-bold text-dark-100">Edit Profile</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} className="p-1">
                <Text className="text-gray-400 font-quicksand-bold text-lg">✕</Text>
              </TouchableOpacity>
            </View>

            {/* Selected Avatar Preview */}
            <View className="items-center mb-6">
              <Image 
                source={{ uri: selectedAvatar || "https://api.dicebear.com/7.x/initials/svg?seed=User" }} 
                className="size-20 rounded-full border-2 border-primary bg-gray-50"
                resizeMode="cover"
              />
              <Text className="text-xs font-quicksand-semibold text-gray-400 mt-2">Choose an Avatar</Text>
            </View>

            {/* Avatar Select Grid */}
            <View className="flex-row flex-wrap justify-center gap-3 mb-6">
              {PREDEFINED_AVATARS.map((av) => {
                const isSelected = selectedAvatar === av;
                return (
                  <TouchableOpacity
                    key={av}
                    onPress={() => setSelectedAvatar(av)}
                    className={`p-0.5 rounded-full border-2 ${isSelected ? "border-primary" : "border-transparent"}`}
                  >
                    <Image source={{ uri: av }} className="size-11 rounded-full bg-gray-50" resizeMode="cover" />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Name Input */}
            <Text className="label mb-2">Full Name</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 mb-6 flex-row items-center">
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#A0A0A0"
                className="flex-1 font-quicksand-semibold text-dark-100 text-base"
              />
            </View>

            {/* Action Buttons */}
            {updating ? (
              <ActivityIndicator size="large" color="#FE8C00" />
            ) : (
              <TouchableOpacity
                onPress={handleUpdateProfile}
                className="bg-primary rounded-2xl py-4 items-center justify-center shadow-lg"
              >
                <Text className="base-bold text-white">Save Changes</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;