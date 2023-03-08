import React from 'react';
import { StyleSheet,View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/screen/View-Signin';
import Main from './src/screen/View-Main';
import Signup from './src/screen/View-Signup';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator InicialRouteName="App">
        <Stack.Screen name="Signin" component={Signin} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name="Main" component={Main} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name="Signup" component={Signup} options={{
          headerShown:false
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
