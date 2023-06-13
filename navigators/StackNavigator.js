import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PickUpScreen from '../screens/PickUpScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        {/*<Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Pickup" options={{headerShown:false}} component={HomeScreen} />*/}
        <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

export default StackNavigator

const styles = StyleSheet.create({})