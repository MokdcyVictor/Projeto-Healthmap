import React, { useEffect, useState } from 'react';
import MapView,{Marker} from 'react-native-maps';
import { View,Image } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../../../firebase'
import { FlatList } from 'react-native-gesture-handler';


export default function ViewMap() {
  const [unidades, setUnidades] = useState([])
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const {granted} =  await requestForegroundPermissionsAsync();

    if(granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(()=>{
    requestLocationPermissions();
  },[])

  useEffect(()=>{
    watchPositionAsync({
      accuracy:LocationAccuracy.Highest,
      timeInterval:1000,
      distanceInterval:1
    }, (response)=>{
      setLocation(response)
  })
  },[])

  useEffect(() => {
    firebase
      .firestore()
      .collection('Hospitais')
      .onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setUnidades(list);
      });
  }, []);

 return (
   <View style={styles.container}>

    {location &&
    <MapView 
      style={styles.map}
      showsUserLocation={true}
      loadingEnabled={true}
      initialRegion={{
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
      }}
    >
      {unidades.map((unidades) =>{
        return(       
        <Marker  
        key={unidades.id}
        pinColor='blue' coordinate={{
          latitude: unidades.Latitude,
          longitude:  unidades.Longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}} title={unidades.Nome}
          onPress={()=>{
            navigation.navigate('Hospital', {id:unidades.id, img:unidades.img})
          }}>
            <View style={{backgroundColor:'blue', width:50, height:50,borderRadius:1000,borderWidth:2, borderColor:'#3173F3'}}>
              <Image style={{width:'100%', height:'100%',borderRadius:1000,}} source={{uri:unidades.img}}></Image>
            </View>
          </Marker> 
          )
      })}

    </MapView>
    }
   </View>
  );
}