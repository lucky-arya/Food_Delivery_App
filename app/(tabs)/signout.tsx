import CustomButton from '@/components/CustomButton'
import { signOut } from '@/lib/supabase'
import { router } from 'expo-router'
import React from 'react'
import { Alert, View } from 'react-native'

const Signout = () => {
    const signoutUser = async () => {
        try {
            await signOut();
            router.replace('/sign-in');
        } catch (error: any) {
            Alert.alert('Error', error.message)
        }
    }
    return (
        <View className='flex-1 justify-center items-center'>
            <CustomButton title='Signout' onPress={signoutUser} />
        </View>
    )
}

export default Signout;