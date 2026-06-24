import { useAuthStore } from '@/store/auth.store';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const _layout = () => {
  const { loading, isLogged } = useAuthStore();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#FF6F61" />
      </View>
    );
  }

  if (!isLogged) return <Redirect href="/sign-in" />

  return <Slot />
}

export default _layout;
