import React, { useEffect,useState } from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import firebase from '../../../../firebase';

export default function Img({parentToChild}) {
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

  const navigation = useNavigation();

  const img = parentToChild

 return (
   <View style={styles.background}>
      <Image style={styles.img} source={{uri:img}}></Image>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} ><Image style={styles.return} source={require('./retornar.png')}></Image></TouchableOpacity>
      <Text style={{color:'white', padding:6, fontSize:30, fontWeight:'bold',alignSelf:'center',justifyContent:'flex-end'}}>{info.nome}</Text>
   </View>
  );
}