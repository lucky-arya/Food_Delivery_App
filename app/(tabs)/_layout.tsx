import { images } from '@/constants';
import { useAuthStore } from '@/store/auth.store';
import cn from 'clsx';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

const TabLayout = () => {
  const { loading, isLogged } = useAuthStore();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#FF6F61" />
      </View>
    );
  }

  if (!isLogged) return <Redirect href="/sign-in" />

  const TabBarIcon = ({ focused, icon, title }: any) => (
    <View className='tab-icon'>
      <Image source={icon} className='size-7' resizeMode='contain' tintColor={focused ? '#FE8C00' : '#5D5F6'} />
      <Text className={cn('text-sm font-bold', focused ? 'text-primary' : 'text-gray-200')}>
        {title}
      </Text>
    </View>
  )

  return <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 80,
        position: 'absolute',
        bottom: 40,
        backgroundColor: '#FFFFFF',
        shadowColor: '#1a1a1a',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      }
    }}
  >
    <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title='Home' icon={images.home} /> }} />
    <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title='Search' icon={images.search} /> }} />
    <Tabs.Screen name="cart" options={{ title: 'Bag', tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title='Bag' icon={images.bag} /> }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title='Profile' icon={images.person} /> }} />
  </Tabs>
}

export default TabLayout;
