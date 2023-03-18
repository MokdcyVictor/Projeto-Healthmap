import React, { useEffect } from 'react';
import { View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import firebase from '../../../../firebase';

export default function Img({parentToChild}) {

  const navigation = useNavigation();

  const img = parentToChild

 return (
   <View style={styles.background}>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} ><Image style={styles.return} source={require('./retornar.png')}></Image></TouchableOpacity>
    </View>
    <Image style={styles.img} source={{uri:img}}></Image>
   </View>
  );
}