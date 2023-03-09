import React from 'react';
import { View,Image,Dimensions, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
import { ArrowUpCircle,Feather, Navigation } from "react-native-feather";
import { Button } from 'react-native-web';

export default function Principal({Navigation}) {

    
 return (
   <View style={styles.background }>
    <View style={styles.Input}>
        <TextInput></TextInput>
        <Image source={require('../image/search.svg')}></Image>
    </View>
    <View style={styles.ballscontent}>
        <TouchableOpacity style={styles.balls}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
        <TouchableOpacity style={styles.balls}></TouchableOpacity>
    </View>

    <Text style={styles.text}>Você está aqui</Text>
    <View style={styles.location}>

    </View>
   </View>
  );
}