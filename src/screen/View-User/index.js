import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import styles from './style';
import {firebase} from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'

export default function ViewUser() {
  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false)

  const navigation = useNavigation(); 

  const pickImage= async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })

    const source = {uri: result.uri}
    console.log(source)
    setImage(source)
  }

  const uploadImage = async()=>{
    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob()
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
    var ref = firebase.storage().ref("users").child(filename).put(blob)

    try{
      await ref
    } catch (e){
      console.log(e)
    }
    setUploading(false)
    Alert.alert(
      'upload'
    )
    setImage(null)
  }

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
    {image && <Image source={{uri: image.uri}} style={{width: 300, height:300}}></Image>}
    <TouchableOpacity>
      <Image source={require('./image/personedit.png')}></Image>
    </TouchableOpacity>
    <Text>Email: {firebase.auth().currentUser.email} </Text>
    <TouchableOpacity onPress={Signout} style={styles.button}><Text style={styles.buttonText}>Sign out</Text></TouchableOpacity>
   </View>
  );
}