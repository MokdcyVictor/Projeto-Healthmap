import React, { useState,useEffect } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './style';
import {firebase} from '../../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ViewUser() {
  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false)

  const navigation = useNavigation(); 
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
   <View style={styles.container}>
    <View style={{width:'100%', height:'40%',alignItems:'flex-end'}}>
      <Image style={{width:100,height:100,margin:20}} source={require('./image/logo.png')}></Image>
    </View>
    <View style={{backgroundColor:'white', width:'100%', height:'60%', borderTopLeftRadius:10, borderTopRightRadius:10, alignItems:'center',}}>
      <Image style={{width:150,height:150,marginTop:-100}} source={require('./image/avatar.png')}></Image>
      <Text style={{marginTop:20,fontSize:20,}}>{name.username}</Text>
        <TouchableOpacity style={{width:'80%',height:50, borderColor:'#3173F3',borderWidth:2,borderRadius:30, alignItems:'center', justifyContent:'center',marginTop:120}}><Text style={{color:'#3173F3', fontSize:15,}}>Editar Perfil</Text></TouchableOpacity>
    </View>
   </View>
  );
}