import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import {firebase} from '../../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ViewUser() {

  const navigation = useNavigation(); 

  const Signout = () =>{
    firebase.auth()
      .signOut()
      .then(()=>{
        navigation.replace('Signin')
      })
      .catch((error)=> alert(error.message))
  }

 return (
   <View style={styles.container}>
    <Text>Email: {firebase.auth().currentUser.email} </Text>
    <TouchableOpacity onPress={Signout} style={styles.button}><Text style={styles.buttonText}>Sign out</Text></TouchableOpacity>
   </View>
  );
}