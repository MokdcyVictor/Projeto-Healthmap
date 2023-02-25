import React from "react"
import {View,Text,Image,Linking} from "react-native"
import styles from "./style";
import Form from "./Form";
import Title from "./Title";



export default function Signup (){
    return(
        <View style={styles.linearGradient}>
            <Title/>
            <Form/>
            <Text style={styles.text} onPress={() => { Linking.openURL('https://reactnative.dev');}}>Não tem uma conta? Cadastre-se</Text>
        </View>
    );
}