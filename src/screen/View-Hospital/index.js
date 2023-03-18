import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './style';

import Description from './description';
import Img from './Image/index'

export default function ViewHospital({route}) {
  
  const img = route.params?.img;
 const id = route.params?.id;
 console.log(id)

  return ( 
    <View style={styles.background}>
        <Img parentToChild={img}></Img>
        <Description parentToChild={id}></Description>
    </View>
    
  );
}