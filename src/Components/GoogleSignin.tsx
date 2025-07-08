import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const GoogleSignin = () => {
  return (
    <View style={{ marginTop: 20, marginLeft: 25 }}>
      
      <TouchableOpacity style={{ marginRight: 10, display: "flex", borderRadius: 5,borderColor:"gray",borderWidth:1 ,alignItems:"center",flexDirection:"row",justifyContent:"center",alignContent:"center",gap:5}}>
        <Image source={require('../../assets/googlelogo.webp')} style={{width:15,height:15}}/>
        <Text style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}>Sign in with Google</Text>
      </TouchableOpacity>


    </View>
  )
}

export default GoogleSignin