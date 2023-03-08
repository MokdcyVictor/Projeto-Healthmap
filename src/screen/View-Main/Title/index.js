import React from 'react';
import { View } from 'react-native';
import styles from './styles'

export default function Title() {
 return (
   <View style={styles.image}>
    <image source={require('../image/perfil.png')}></image>
    <View>
      <Text>olá, Usuario</Text>
    </View>
   </View>
  );
}