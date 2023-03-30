import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      <Text>{info.endereço}</Text>
      <Text>{info.contato}</Text>
      <Text>{info.Funcionamento}</Text>
    </View>
    <TouchableOpacity style={styles.buttom}><Text style={styles.textButton}>Rotas</Text></TouchableOpacity>
   </View>
  );
}