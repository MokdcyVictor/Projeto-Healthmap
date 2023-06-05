import React, { useEffect,useState } from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import {firebase} from '../../../../firebase';


export default function Img({parentToChild}) {
  const [info, setInfo] = useState('');
  useEffect(()=>{
    firebase.firestore().collection('Unidades').doc(parentToChild.id).get().then((doc)=>{
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
    firebase.firestore().collection('Hospitais').doc(parentToChild.id).get().then((doc)=>{
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
    firebase.firestore().collection('Pronto Socorro').doc(parentToChild.id).get().then((doc)=>{
      if(doc.exists){
        setInfo(doc.data())
      }
      else{
      }
    }).catch((error)=>{
      console.log("error getting doument:", error)
    })
  })


  const navigation = useNavigation();

  const img = info.img

 return (
   <View style={styles.background}>
      <Image style={styles.img} source={{uri:img}}></Image>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} ><Image style={styles.return} source={require('../Image/retornar.png')}></Image></TouchableOpacity>
      <Text style={{color:'white', padding:6, fontSize:30, fontWeight:'bold',alignSelf:'center',justifyContent:'flex-end'}}>{info.Nome}</Text>
   </View>
  );
}