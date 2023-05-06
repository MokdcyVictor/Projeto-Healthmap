import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function services({props,parentCallback}) {

  const [estado,setEstado] = useState(true);

  const mudanca1 = ()=>{
    parentCallback(false)
    setEstado(false)
  };
  const mudanca2 =()=>{
    parentCallback(true)
    setEstado(true)
  }

 return (
   <View style={styles.background}>
    <View style={{width:"45%",height:'100%',borderBottomColor:estado? 'blue':'#ffff',borderBottomWidth:2,}}><TouchableOpacity style={styles.button}><Text style={{margin:10, fontSize:15, color:estado? 'blue':'black'}} onPress={mudanca2}>Descrição</Text></TouchableOpacity></View>
    <View style={{width:'45%',height:'100%',borderBottomColor:estado ? '#ffff': 'blue',borderBottomWidth:2,}}><TouchableOpacity style={styles.button}><Text style={{margin:10, fontSize:15, color:estado? 'black':'blue'}} onPress={mudanca1}>Atendimentos</Text></TouchableOpacity></View>
   </View>
  );
}