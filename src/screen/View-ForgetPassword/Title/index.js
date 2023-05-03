import React from "react"
import {View,Text,Image} from "react-native"
import styles from "./style";





export default function Title (){
    return(
        <Image style={styles.image} source={require('../image/logo.png')}></Image>
    );
}