import React,{useState} from "react"
import {TouchableOpacity,View,Text,Image, TextInput,Linking} from "react-native"
import styles from "./style";
import auth from "../../../../firebase"
import { useNavigation } from '@react-navigation/native';



export default function Form (){
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const CreateAccount = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
        const user = userCredential.user;
        navigation.navigate('Main');
        alert("success")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
    // ..
    });

    }

    const navigation = useNavigation(); 

    return(
        <View style={styles.context}>
            <TextInput style={styles.Input} multiline={false} placeholder="Digite seu nome"></TextInput>
                <TextInput onChangeText={(text)=>setEmail(text)} style={styles.Input} multiline={false} placeholder="Informe seu E-mail"></TextInput>
                <TextInput onChangeText={(text) => setPassword} style={styles.Input} autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="Digite sua senha"></TextInput>
                <TextInput style={styles.Input} textContentType='password' autoCorrect={false} secureTextEntry={true} multiline={false} placeholder="confirme sua senha"></TextInput>
                <Text style={styles.hyperlinkStyle} onPress={() => { 
                                                    navigation.navigate('Signin')
                                                    }}> 
                                                        Esqueceu a senha?
                </Text> 
                <TouchableOpacity onPress={()=>{CreateAccount()}} style={styles.Button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
                <Text style={styles.textmedio}>ou</Text>
                <View>
                </View>
        </View>
    );
}