import React,{useState,useEffect,useRef} from 'react';
import { View, Image, Text} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Rotas() {
  const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDurantion] =  useState(null)
  
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
  
    useEffect(()=>{
      watchPositionAsync({
        accuracy:LocationAccuracy.Highest,
        timeInterval:1000,
        distanceInterval:1
      }, (response)=>{
        console.log(response);
        setLocation(response)
    })
    },[])
  
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
          <MapViewDirections
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude   
            }}
            destination={{
                latitude: -3.101582340298086,
                longitude:  -60.01413263166075,
            }}
            onReady={result =>{
              setDistance(Math.floor(result.distance));
              setDurantion(Math.floor(result.duration))
            }}
            apikey={"AIzaSyDbVVzpYNMdkf03FIIBlreVsRXsRMrmMuo"}
            strokeWidth={3}
            />
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
      <View style={{backgroundColor:'#3173F3',alignItems:'center',flexDirection:'row', width:'100%', height:'10%',justifyContent:'space-between'}}>
        <View style={{alignSelf:'flex-start'}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image source={require('./img/close.png')} style={{width:50,height:50,marginLeft:10}}></Image></TouchableOpacity>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:'40%'}}>
          <Text style={{fontSize:20,color:'white', fontWeight:'bold'}}>
            {duration} Min
          </Text>
          <Text style={{color:'white', fontWeight:'bold'}}>
            {distance} Km
          </Text>
        </View>
      </View>
     </View>
)}
