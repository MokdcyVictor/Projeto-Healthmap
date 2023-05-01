import React, { useEffect, useState } from 'react';
import MapView,{Marker} from 'react-native-maps';
import { View } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../../firebase'


export default function ViewMap() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const {granted} =  await requestForegroundPermissionsAsync();

    if(granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      console.log(currentPosition)
    }
  }

  useEffect(()=>{
    requestLocationPermissions();
  },[])

 return (
   <View style={styles.container}>

    {location &&
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
      }}
    >
       <Marker  pinColor='blue' coordinate={{
        latitude: -3.101582340298086,
        longitude:  -60.01413263166075,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}} title='Marker'
        onPress={()=>{
          navigation.navigate('Hospital', {id:"99aurx0psKEZu9Y3IP1z", img:'https://firebasestorage.googleapis.com/v0/b/projeto-healthmap.appspot.com/o/ubs%2Fhospital.jpg?alt=media&token=0f5e7154-0a46-4408-828c-9408ba0a9501'})
        }}></Marker> 
    </MapView>
    }
   </View>
  );
}