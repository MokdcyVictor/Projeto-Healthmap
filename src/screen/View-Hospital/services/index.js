import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function services({props}) {

  const [estado,setEstado] = useState(0);

  const mudanca1 = ()=>{
    setEstado(1)
    console.log(estado)
  };
  const mudanca2 =()=>{
    setEstado(0)
    console.log(estado)
  }

 return (
   <View style={styles.background}>
    <View style={{width:"45%",height:'100%',borderBottomColor:'blue',borderBottomWidth:2,}}><TouchableOpacity style={styles.button}><Text style={{margin:10, fontSize:15, color:'blue'}} onPress={mudanca2}>Descrição</Text></TouchableOpacity></View>
    <View style={{width:'45%',height:'100%'}}><TouchableOpacity style={styles.button}><Text style={{margin:10, fontSize:15}} onPress={mudanca1}>Atendimentos</Text></TouchableOpacity></View>
   </View>
  );
}