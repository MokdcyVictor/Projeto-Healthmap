import React from "react"
import {View, Text} from "react-native"
import styles from "./style"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Title from "./Title/index"
import Buttons from "./Buttons/index"
import Principal from "./Principal/index"


const Tab = createBottomTabNavigator();

export default function Main (){
    return(
        <View style={styles.background}>
            <Title />
            <Buttons />
            <Principal />
        </View>
)}