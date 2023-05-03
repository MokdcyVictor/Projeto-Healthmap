import React,{useEffect, useState} from "react"
import {TouchableOpacity,View,Text,Image, TextInput,Linking, BackHandler, Alert} from "react-native"
import styles from "./style";
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../../../firebase";
import Tabs from "../../../../navigation/tabs";

export default function Form (){
    const [email, setEmail] = useState(null);

    const navigation = useNavigation(); 

    const recover =()=>{
        if(email !== ''){
            console.log(email);
            firebase.auth()
            .sendPasswordResetEmail(email)
            .then((r)=>{
                Alert.alert('Atenção', 'Enviamos um email de recuperação para o seu email')
        }).catch((e)=>{
            console.log('SignIn:erro em entrar :' + e)
            switch (e.code) {
                case 'auth/user-not-found':
                    Alert.alert('Erro', 'Usuario não cadastrado')
                    break;
                case 'auth/invalid-email':
                    Alert.alert('Erro','Email invalido')
                    break;
                case 'auth/use-disable':
                    Alert.alert('Erro', 'Usuario desasbilitado')
                    break;
            
                default:
                    break;
            }
        })
        }else{
            Alert.alert('Atenção','Por favor, digite seu email novamente')
        }
    }

    return(
        <View style={styles.context}>
                <TextInput  value={email} onChangeText={(email)=> setEmail(email)} style={styles.Input} multiline={false} placeholder="Informe seu E-mail"></TextInput>
                <Text style={{alignItems:'center',textAlign:'justify', fontSize:13,color:'#7777', margin:20}}>Enviaremos um código por e-mail para verificar sua identidade</Text>
                <TouchableOpacity onPress={()=>{recover()}}  style={styles.Button}><Text style={styles.textButton}>Enviar</Text></TouchableOpacity>
        </View>
    );
}