import React from "react"
import {View, Text} from "react-native"
import styles from "./style"
import Title from "./Title/index"
import Buttons from "./Buttons"

export default function Main (){
    return(
        <View style={styles.background}>
            <Title/>
            <Buttons/>
        </View>
    )}