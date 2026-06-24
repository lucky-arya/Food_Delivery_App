import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { creatUser, getCurrentUser } from '@/lib/supabase';
import { Link, Redirect, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import { useAuthStore } from '@/store/auth.store';

const SignUp = () => {
  const { loading, isLogged, setUser, setIsLogged } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  if (!loading && isLogged) return <Redirect href="/" />;


  const submitSignInForm = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password) return Alert.alert('Error', 'Please enter valid email and password');

    setIsSubmitting(true);
    try {

      //call appwrite Sign Up Function
      await creatUser({
        name,
        email,
        password
      })

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
        placeholder='Enter Your Full Name'
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label="Name"
        keyBoardType="default"
      />
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
      <CustomButton title="Sign-Up" isLoading={isSubmitting} onPress={submitSignInForm} />
      <View className='flex flex-row justify-center gap-2 mt-5'>
        <Text className='base-regular text-gray-100'>
          Already have an account?
        </Text>
        <Link href="/sign-in">
          <Text className='base-semibold text-primary'>Sign-In</Text>
        </Link>
      </View>
    </View>
  )
}

export default SignUp