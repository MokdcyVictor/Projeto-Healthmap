import React, { useState, useEffect } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import styles from './style';
import {firebase} from '../../../../firebase';
import { useNavigation } from "@react-navigation/native";

export default function description({parentToChild}) {
  const [info, setInfo] = useState('');
  const navigation = useNavigation();
  const id = parentToChild.id;
  const service = parentToChild.estado;

  useEffect(()=>{
    firebase.firestore().collection("Ubs").doc(id).get().then((doc)=>{
      if(doc.exists){
        setInfo(doc.data())
      }
      else{
      }
    }).catch((error)=>{
      console.log("error getting doument:", error)
    })
  })

  useEffect(()=>{
    firebase.firestore().collection("Hospitais").doc(id).get().then((doc)=>{
      if(doc.exists){
        setInfo(doc.data())
      }
      else{
      }
    }).catch((error)=>{
      console.log("error getting doument:", error)
    })
  })

  useEffect(()=>{
    firebase.firestore().collection("Pronto Socorro").doc(id).get().then((doc)=>{
      if(doc.exists){
        setInfo(doc.data())
      }
      else{
      }
    }).catch((error)=>{
      console.log("error getting doument:", error)
    })
  })

 return (
   <View style={styles.background}>
    {service === true &&
    <View style={styles.information}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginBottom:'10%'}}>
      <Image source={require('../Image/map-pin.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>{info.Endereco}</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/clock.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>{info.Funcionamento}</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/globe.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>{info.Email}</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/phone.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>{info.Contato}</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/bus.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>501</Text>
    </View>
  </View>
    }
    {service === false &&
      <View style={styles.information}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/paper.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>Serviço administrativo/Ouvidoria</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/paper.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>Serviço de apoio diagnóstico/Exames</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/paper.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>Serviço de Endoscopia Digestiva Diagnóstica e Terapêutica</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/paper.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>Serviço de Colonoscopia</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'10%'}}>
      <Image source={require('../Image/paper.png')} style={{width:20, height:20,margin:5}}></Image>
      <Text>Serviço de Endoscopia</Text>
    </View>
  </View>
    }


    
    <TouchableOpacity style={styles.buttom} onPress={()=>{navigation.navigate('Rotas',{id})}}><Text style={styles.textButton}>Rotas</Text></TouchableOpacity>
   </View>
  );
}