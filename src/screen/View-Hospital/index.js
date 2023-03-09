import React from 'react';
import { View } from 'react-native';
import styles from './style';

import Description from './description';
import Img from './Image/index'

export default function ViewHospital() {
 return (
    <View style={styles.background}>
        <Img></Img>
        <Description></Description>
    </View>
    
  );
}