import React, { useEffect, useState } from 'react';
import { View, Button,Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function ViewMap() {

  const navigation = useNavigation();

  const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
  })

  const userLocation = async()=>{
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('permission to accees location was denied')
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

      })
      console.log(location.coords.latitude, location.coords.longitude)
    }

    useEffect(()=>{
      userLocation();
    },[])

 return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={mapRegion}
      >
        <Marker coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital')
        }}>

      </Marker>
      </MapView>
      <Button title='get location' onPress={userLocation}></Button>
  </View>
  );
}