import React, { useEffect, useState } from 'react';
import { View, Button,Text, BackHandler, TouchableOpacity, Image } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function ViewMap() {

  const navigation = useNavigation();

  const [mapRegion, setMapRegion] = useState({
        latitude: -3.10170,
        longitude: -60.0141,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
  })

  const userLocation = async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        setErrorMsg('access negado')
      }
      let location = await Location.getCurrentPositionAsync({enableHighAcurracy:true});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta:0.0421,
      })
      console.log(location.coords.latitude,location.coords.longitude)
    };

    useEffect(()=>{
      userLocation();
    },[]);

 return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={mapRegion}
        loadingEnabled
        showsUserLocation
      >
        
       <Marker coordinate={{
        latitude: -3.101582340298086,
        longitude:  -60.01413263166075,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"99aurx0psKEZu9Y3IP1z", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2Fhospital.jpg?alt=media&token=0f5e7154-0a46-4408-828c-9408ba0a9501'})
        }}></Marker> 
        <Marker coordinate={{
        latitude: -3.0767412,
        longitude: -59.9547822,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"7nIWYU2x3QvQYpCy9scK", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2Fanamariabraga.jpg?alt=media&token=0a803f7e-c810-4531-806f-9fb2079bb873'})
        }}></Marker>
        <Marker coordinate={{
        latitude: -3.1266332,
        longitude: -60.0130364,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"Pvd135QMqku2TZbJcZz6", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2FBalbinaMestrinho.jpg?alt=media&token=ba1b1203-51c2-4ed2-b1fa-8163eaa0f959'})
        }}></Marker>
        <Marker coordinate={{
        latitude: -3.0385201,
        longitude: -59.9435218,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"e1kCidi1o9P5aFeq8wMw", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2Fplat%C3%A3oaraujo.jpg?alt=media&token=8ad8ea11-61df-49f6-af8d-c64d5b83251d://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2FBalbinaMestrinho.jpg?alt=media&token=ba1b1203-51c2-4ed2-b1fa-8163eaa0f959'})
        }}></Marker>
        <Marker coordinate={{
        latitude: -3.0296771,
        longitude: -59.9797242,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"e1kCidi1o9P5aFeq8wMw", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2Fplat%C3%A3oaraujo.jpg?alt=media&token=8ad8ea11-61df-49f6-af8d-c64d5b83251d://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2FBalbinaMestrinho.jpg?alt=media&token=ba1b1203-51c2-4ed2-b1fa-8163eaa0f959'})
        }}></Marker>
      </MapView>
      <Button title='get location' onPress={userLocation}></Button>
  </View>
  );
}