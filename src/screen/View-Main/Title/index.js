import React ,{useState,useEffect}from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import {firebase} from '../../../../firebase'

export default function Title() {
const [name, setName] = useState('')

  useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
        setName(snapshot.data())
      } else{
        console.log('user does not exist')
      }
    })
  })

 return (
   <View style={styles.background}>
    
    <Image style={styles.perfil} source={require('../image/perfil.png')}></Image>
      <Text style={styles.text}>olá, {name.username}!</Text>
    <Image style={styles.logo} source={require('../image/logo.png')}></Image>
   </View>
  );
}