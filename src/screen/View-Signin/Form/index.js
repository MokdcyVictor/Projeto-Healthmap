import React,{useEffect, useState} from "react"
import {TouchableOpacity,View,Text,Image, TextInput,Linking, BackHandler} from "react-native"
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../../../firebase";

export default function Form (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser  = async (email, password) =>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim())
            navigation.navigate('Main')
        } catch (error){
            alert(error.message)
        }
    }

    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', () =>{
            return true
        })
    },[])

    const navigation = useNavigation(); 

    return(
        <View style={styles.context}>
                <TextInput  value={email} onChangeText={(email)=> setEmail(email)} style={styles.Input} multiline={false} placeholder="Informe seu E-mail"></TextInput>
                <TextInput  value={password} onChangeText={(password)=> setPassword(password)} style={styles.Input} textContentType='password' autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="Digite sua senha"></TextInput>
                <Text style={styles.hyperlinkStyle} onPress={() => navigation.navigator('Signup')}> Esqueceu a senha?</Text> 
                <TouchableOpacity onPress={() => {loginUser(email, password)}}  style={styles.Button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
                <Text style={styles.textmedio}>ou</Text>
                <View>
                </View>
        </View>
    );
}