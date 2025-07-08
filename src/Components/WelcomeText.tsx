import React from 'react'
import { Text, View } from 'react-native'

const WelcomeText = () => {
  return (
    <View>
      <Text style={{fontSize:40,fontWeight:"bold",paddingLeft:20,marginTop:25}}>Login</Text>
      <Text style={{paddingLeft:20,fontSize:20,color:"gray"}}>Please enter your details</Text>

    </View>
  )
}

export default WelcomeText