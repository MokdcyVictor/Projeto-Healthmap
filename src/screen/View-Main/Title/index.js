import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

export default function Title() {
 return (
   <View style={styles.background}>
    <Image style={styles.perfil} source={require('../image/perfil.png')}></Image>
    <View style={styles.textContent}>
      <Text style={styles.text}>olá,{'\n'}Usuario</Text>
    </View>
    <Image style={styles.logo} source={require('../image/logo.png')}></Image>
   </View>
  );
}