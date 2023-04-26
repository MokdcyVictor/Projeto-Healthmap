import React, { useState, useEffect } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import styles from './style';
import {firebase} from '../../../../firebase';

export default function description({parentToChild}) {
  const [info, setInfo] = useState('');
  useEffect(()=>{
    firebase.firestore().collection('ubs').doc(parentToChild).get().then((doc)=>{
      if(doc.exists){
        setInfo(doc.data())
      }
      else{
        console.log("No such document")
      }
    }).catch((error)=>{
      console.log("error getting doument:", error)
    })
  })

 return (
   <View style={styles.background}>

    <View style={styles.information}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginBottom:20}}>
        <Image source={require('../Image/map-pin.png')} style={{width:20, height:20,margin:5}}></Image>
        <Text>{info.endereço}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Image source={require('../Image/clock.png')} style={{width:20, height:20,margin:5}}></Image>
        <Text>{info.Funcionamento}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Image source={require('../Image/globe.png')} style={{width:20, height:20,margin:5}}></Image>
        <Text>{info.contato}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Image source={require('../Image/globe.png')} style={{width:20, height:20,margin:5}}></Image>
        <Text>{info.contato}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Image source={require('../Image/globe.png')} style={{width:20, height:20,margin:5}}></Image>
        <Text>{info.contato}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.buttom}><Text style={styles.textButton}>Rotas</Text></TouchableOpacity>
   </View>
  );
}