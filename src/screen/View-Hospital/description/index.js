import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function description() {
 return (
   <View style={styles.background}>
    <Text style={styles.text}>UBS</Text>
    <TouchableOpacity style={styles.buttom}><Text style={styles.textButton}>Rotas</Text></TouchableOpacity>
   </View>
  );
}