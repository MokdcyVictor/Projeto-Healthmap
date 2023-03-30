import React,{useState,useEffect} from 'react';
import { View,Image,Dimensions, TouchableOpacity, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './style';
import { ArrowUpCircle,Feather, Navigation } from "react-native-feather";
import { Button } from 'react-native-web';
import MapView from 'react-native-maps';
import ViewMap from '../../View-Map/index'
import { useNavigation } from '@react-navigation/native';


export default function Principal({Navigation}) {
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
   <View style={styles.background }>
    <View style={styles.Input}>
        <TextInput></TextInput>
        <Image source={require('../image/search.svg')}></Image>
    </View>
    <View style={styles.ballscontent}>
        <TouchableOpacity style={styles.balls}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
    </View>

    <Text style={styles.text}>Você está aqui</Text>
    <View style={styles.location}>
      <ViewMap></ViewMap>
    </View>
   </View>
  );
}