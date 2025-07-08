interface ButtonTextProps{
  onPress?:()=>void;
  label:string;
}



import React from 'react'
import { Text,TouchableOpacity, View } from 'react-native'

const ButtonText = ({onPress,label}:ButtonTextProps) => {
  return (
    <View style={{marginTop:20,marginLeft:25}}>
      <TouchableOpacity style={{backgroundColor:"black",marginRight:10,display:"flex",borderRadius:5}} onPress={()=>onPress?.()}>
        <Text style={{color:"white",textAlign:"center",paddingTop:10,paddingBottom:10}}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonText