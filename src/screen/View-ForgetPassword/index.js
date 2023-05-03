import React from 'react';
import { View,Text } from 'react-native';
import styles from './style';

import Title from './Title';
import Form from './Form';

export default function ViewForgetPassword() {
 return (
   <View style={styles.linearGradient}>
        <Title/>
        <Form/>
   </View>
  );
}