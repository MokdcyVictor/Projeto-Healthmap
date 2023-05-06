import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';

import Description from './description';
import Img from './Image/index'
import Services from './services';

export default function ViewHospital({route}) {

  const [state,setState] = useState({
    id : route.params?.id,
    img : route.params?.img,
    estado:true,
  })

  function callbackfuction(parentCallback) {
      setState({
      estado:parentCallback
    })
    
  }

  return ( 
    <View style={styles.background}>
        <Img parentToChild={state}></Img>
        <Services parentCallback={callbackfuction}/>
        <Description parentToChild={state}></Description>
    </View>
    
  );
}