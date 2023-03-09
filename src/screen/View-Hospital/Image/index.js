import React from 'react';
import { View,Image } from 'react-native';
import styles from './style';

export default function Img() {
 return (
   <View style={styles.background}>
    <Image style={styles.img} source={require('./hospital.jpg')}></Image>
   </View>
  );
}