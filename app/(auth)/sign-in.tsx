import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' })


  const submitSignInForm = async () => {
    if (!form.email || !form.password) return Alert.alert('Error', 'Please enter valid email and password');

    setIsSubmitting(true);
    try {
      //call appwrite Sign In Function
      Alert.alert('Success', 'Sign In Successfully');
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
          Don't have an account?
        </Text>
        <Link href="/sign-up">
          <Text className='base-semibold text-primary'>Sign-Up</Text>
        </Link>
      </View>
    </View>
  )
}

export default SignIn