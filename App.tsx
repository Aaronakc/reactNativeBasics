/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';


function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" />
    // </View>
 <View style={styles.container}>

   {/* <LoginScreen/> */}
   <SignUpScreen/>
 </View>
 
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>hello world</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
