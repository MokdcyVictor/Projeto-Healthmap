import React from 'react';
import { Button, View, Image, TouchableOpacity,Text } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Buttons() {

  const navigation = useNavigation(); 

 return (
   <View style={styles.view}>
    <View style={styles.viewbutton}>
    <TouchableOpacity onPress={()=>{
            navigation.navigate('Map')
        }} style={styles.background}><Image source={require('./image/map.png')}></Image></TouchableOpacity>
    <Text style={styles.textbutton}>Mapa</Text>
    </View>
    <View style={styles.viewbutton}>
      <TouchableOpacity style={styles.background}><Image source={require('./image/hospital.png')}></Image></TouchableOpacity>
      <Text style={styles.textbutton}>Categorias</Text>
    </View>
    <View style={styles.viewbutton}>
      <TouchableOpacity style={styles.background}><Image source={require('./image/star.png')}></Image></TouchableOpacity>
      <Text style={styles.textbutton}>Cartão de vacinas</Text>
    </View>
    <View style={styles.viewbutton}>
      <TouchableOpacity style={styles.background}><Image source={require('./image/card.png')}></Image></TouchableOpacity>
      <Text style={styles.textbutton}>Favoritos</Text>
    </View>
   </View>
  );
}