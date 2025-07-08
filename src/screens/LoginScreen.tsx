import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native'
import InputText from '../Components/InputText'
import ButtonText from '../Components/ButtonText'
import TitleText from '../Components/TitleText'
import WelcomeText from '../Components/WelcomeText'
import RememberUser from '../Components/RememberUser'
import GoogleSignin from '../Components/GoogleSignin'
import Footer from '../Components/Footer'

const LoginScreen = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [detail,setDetail]=useState("")
  const [remember, setRemember] = useState(false)

  const handleRemember = () => {
    setRemember(!remember)
  }


  const handleEmail=(text:string)=> setEmail(text)

  

  const handlePassword=(text:string)=>setPassword(text)
  
  


  const handleDetail=()=>{
    setDetail(`Email:${email} Password:${password}`)
    console.log("btn pressed")
  }
  console.log(detail)

  return (
   <View>
    <TitleText/>
    <WelcomeText/>
    <InputText label="Email address" onChangeText={handleEmail} value={email}/>
    <InputText label="Password" onChangeText={handlePassword} value={password}/>
    <RememberUser onPress={handleRemember} remember={remember}/>
    <ButtonText onPress={handleDetail} label='Sign in'/>
    <GoogleSignin/>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:10,marginBottom:50}}>
    <Text style={{marginLeft:25}}>Don't have an account?</Text>
    <Text style={{textDecorationLine:"underline",color:"#ffcc00"}}>Sign Up</Text>
    </View>
    <Footer/>
    
   </View>
    
  )
}

export default LoginScreen