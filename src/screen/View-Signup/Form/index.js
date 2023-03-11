import React,{useState} from "react"
import {TouchableOpacity,View,Text,Image, TextInput,Linking, EventSubscriptionVendor} from "react-native"
import styles from "./style";
import {firebase} from '../../../../firebase'
import { useNavigation } from '@react-navigation/native';



export default function Form (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const registerUser = async (email, password, username) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                username,
            }).catch((error)=>{
                alert(error.message)
            })
            alert("Usuario Cadastrado com Sucesso")
            navigation.navigate("Signin")
        }) .catch((error)=>{
            alert(error.message)
        })
    }


    const navigation = useNavigation(); 

    return(
        <View style={styles.context}>
            <TextInput onChangeText={(username) => setUsername(username)} style={styles.Input} multiline={false} placeholder="Digite seu nome"></TextInput>
                <TextInput onChangeText={(email)=>setEmail(email)} style={styles.Input} multiline={false} placeholder="Informe seu E-mail"></TextInput>
                <TextInput onChangeText={(password) => setPassword(password)} style={styles.Input} autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="Digite sua senha"></TextInput>
                <TextInput style={styles.Input} textContentType='password' autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="confirme sua senha"></TextInput>
                <Text style={styles.hyperlinkStyle} onPress={() => { 
                                                    navigation.navigate('Signin')
                                                    }}> 
                                                        Esqueceu a senha?
                </Text> 
                <TouchableOpacity onPress={()=>{registerUser(email,password,username)}} style={styles.Button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
                <Text style={styles.textmedio}>ou</Text>
                <View>
                </View>
        </View>
    );
}