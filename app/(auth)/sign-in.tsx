import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Sign_In, getCurrentUser } from '@/lib/supabase';
import { Link, Redirect, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import { useAuthStore } from '@/store/auth.store';

const SignIn = () => {
  const { loading, isLogged, setUser, setIsLogged } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' })

  if (!loading && isLogged) return <Redirect href="/" />;


  const submitSignInForm = async () => {

    const { email, password } = form;

    if (!email || !password) return Alert.alert('Error', 'Please enter valid email and password');

    setIsSubmitting(true);
    try {
      //call appwrite Sign In Function
      await Sign_In({ email, password })

      const user = await getCurrentUser();
      setUser(user);
      setIsLogged(true);

      router.replace('/');
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter Your Email'
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyBoardType="email-address"
      />
      <CustomInput
        placeholder='Enter Your Password'
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        label="Password"
        secureTextEntry
      />
      <CustomButton title="Sign-In" isLoading={isSubmitting} onPress={submitSignInForm} />
      <View className='flex flex-row justify-center gap-2 mt-5'>
        <Text className='base-regular text-gray-100'>
          Don&apos;t have an account?
        </Text>
        <Link href="/sign-up">
          <Text className='base-semibold text-primary'>Sign-Up</Text>
        </Link>
      </View>
    </View>
  )
}

export default SignIn