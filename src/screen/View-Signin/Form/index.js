import React,{useState} from "react"
import {TouchableOpacity,View,Text,Image, TextInput,Linking} from "react-native"
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Form (){

    const navigation = useNavigation(); 

    return(
        <View style={styles.context}>
                <TextInput style={styles.Input} multiline={false} placeholder="Informe seu E-mail"></TextInput>
                <TextInput style={styles.Input} textContentType='password' autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="Digite sua senha"></TextInput>
                <Text style={styles.hyperlinkStyle} onPress={() => navigation.navigator('Signup')}> Esqueceu a senha?</Text> 
                <TouchableOpacity onPress={() => { navigation.navigate('Main')}}  style={styles.Button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
                <Text style={styles.textmedio}>ou</Text>
                <View>
                </View>
        </View>
    );
}