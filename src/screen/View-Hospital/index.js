import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './style';

import Description from './description';
import Img from './Image/index'
import Services from './services';

export default function ViewHospital({route}) {

  const state = {
    id : route.params?.id,
    img : route.params?.img,
    estado:null
  }
  const callbackfunction=(childData)=>{
    setState({estado:childData})
  }

  return ( 
    <View style={styles.background}>
        <Img parentToChild={state}></Img>
        <Services parentCallback={callbackfunction}/>
        <Description parentToChild={state}></Description>
    </View>
    
  );
}