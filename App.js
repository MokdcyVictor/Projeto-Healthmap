import React from 'react';
import { StyleSheet,View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/screen/View-Signin';
import Main from './src/screen/View-Main';
import Signup from './src/screen/View-Signup';
import Map from './src/screen/View-Map';
import Hospital from './src/screen/View-Hospital';
import Loading from './src/screen/View-Loading';
import Tabs from './navigation/tabs';
import FlatList from './src/screen/View-FlatList';
import Rotas from './src/screen/View-Rotas'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator InicialRouteName="App">
      <Stack.Screen name="Loading" component={Loading} options={{
          headerShown:false
          }}></Stack.Screen>
        <Stack.Screen name="Signin" component={Signin} options={{
          headerShown:false,
          gestureEnabled:false,
          }}></Stack.Screen>
          <Stack.Screen name="Signup" component={Signup} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name='Tabs' component={Tabs} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="Map" component={Map} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name="Hospital" component={Hospital} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name="FlatList" component={FlatList} options={{
          headerShown:false
          }}></Stack.Screen>
          <Stack.Screen name="Rotas" component={Rotas} options={{
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
