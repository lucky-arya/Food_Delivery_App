import cn from 'clsx';
import React, { useState } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    label: string;
    secureTextEntry?: boolean;
    keyBoardType?: KeyboardTypeOptions;
}

const CustomInput = ({ placeholder, value, onChangeText, label, secureTextEntry = false, keyBoardType = 'default' }: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View className='w-full'>
            <Text className='label'>{label}</Text>
            <TextInput className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')} autoCapitalize='none' autoCorrect={false} value={value} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyBoardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor='#888'
            />
        </View>
    )
}

export default CustomInput