interface InputTextProps {
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
}

import React from 'react'
import { Text, TextInput, View } from 'react-native'

const InputText = ({ label, value, onChangeText }: InputTextProps) => {
  return (
    <View style={{ marginTop: 20, marginLeft: 25 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{label}</Text>
      <TextInput style={{ borderColor: "gray", borderWidth: 0.8, marginRight: 10, borderRadius: 5 }} onChangeText={(text) => onChangeText?.(text)} value={value} />


    </View>
  )
}

export default InputText