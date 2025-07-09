import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TodoTaskScreen from '../screens/TodoTaskScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (

    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // no headers
        animation: 'none'   // no animation
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="TodoTask" component={TodoTaskScreen} />
    </Stack.Navigator>

  )
}

export default RootStack