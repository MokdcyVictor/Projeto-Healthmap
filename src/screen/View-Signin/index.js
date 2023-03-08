import React from "react"
import {View,Text,Image,Linking} from "react-native"
import styles from "./style";
import Form from "./Form";
import Title from "./Title";


export default function Signin ({navigation}){
    return(
        <View style={styles.linearGradient}>
            <Title/>
            <Form/>
            <Text style={styles.text} onPress={() => navigation.navigate('Signup')}>Não tem uma conta? Cadastre-se</Text>
        </View>
    );
}