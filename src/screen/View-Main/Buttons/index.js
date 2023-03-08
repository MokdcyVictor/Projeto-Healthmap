import React from 'react';
import { Button, View, Image, TouchableOpacity,Text } from 'react-native';
import styles from './style';

export default function Buttons() {
 return (
   <View style={styles.view}>
    <View >
    <TouchableOpacity style={styles.background}><Image source={require('./image/map.png')}></Image></TouchableOpacity>
    <Text>Mapa</Text>
    </View>
    <TouchableOpacity style={styles.background}><Image source={require('./image/hospital.png')}></Image></TouchableOpacity>
    <TouchableOpacity style={styles.background}><Image source={require('./image/star.png')}></Image></TouchableOpacity>
    <TouchableOpacity style={styles.background}><Image source={require('./image/card.png')}></Image></TouchableOpacity>
   </View>
  );
}