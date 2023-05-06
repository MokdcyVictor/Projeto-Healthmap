import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./style";
import { firebase } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function Form() {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isPasswordSecureagain, setIsPasswordSecureagain] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] =  useState("")
  const [username, setUsername] = useState("");

  const [erro, setErro] = useState(false)

  if (password === confpassword) {
    const registerUser = async (email, password, username) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then(() => {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              username,
              email,
            })
            .catch((error) => {
              alert(error.message);
            });
          alert("Usuario Cadastrado com Sucesso");
          navigation.navigate("Signin");
        })
        .catch((error) => {
          setErro(true)
        });
    };
  }else{
    setErro(true)
  }

  

  const navigation = useNavigation();

  return (
    <View style={styles.context}>
      <TextInput
        left={<TextInput.Icon icon={"account"} iconColor={erro? 'red': '#3173F3'}  />}
        activeOutlineColor="#3173F3"
        outlineColor="#3173F3"
        onChangeText={(username) => setUsername(username)}
        mode="outlined"
        style={styles.Input}
        multiline={false}
        placeholder="Digite seu nome"
        placeholderTextColor={erro? 'red': '#777777'} 
      ></TextInput>
      <TextInput
        left={<TextInput.Icon icon={"email"} iconColor={erro? 'red': '#3173F3'}  />}
        activeOutlineColor="#3173F3"
        outlineColor="#3173F3"
        onChangeText={(email) => setEmail(email)}
        mode="outlined"
        style={styles.Input}
        multiline={false}
        placeholder="Informe seu E-mail"
        placeholderTextColor={erro? 'red': '#777777'} 
      ></TextInput>
      <TextInput
        left={<TextInput.Icon icon={"lock"} iconColor={erro? 'red': '#3173F3'}  />}
        right={
          <TextInput.Icon
            icon={isPasswordSecure ? "eye" : "eye-off"}
            iconColor="#3173F3"
            onPress={() => {
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true);
            }}
          />
        }
        activeOutlineColor="#3173F3"
        outlineColor="#3173F3"
        onChangeText={(password) => setPassword(password)}
        mode="outlined"
        style={styles.Input}
        autoCorrect={false}
        secureTextEntry={isPasswordSecure}
        multiline={false}
        placeholder="Digite sua senha"
        placeholderTextColor={erro? 'red': '#777777'} 
      ></TextInput>
      <TextInput
        left={<TextInput.Icon icon={"lock"} iconColor={erro? 'red': '#3173F3'}  />}
        right={
          <TextInput.Icon
            icon={isPasswordSecureagain ? "eye" : "eye-off"}
            iconColor="#3173F3"
            onPress={() => {
              isPasswordSecureagain
                ? setIsPasswordSecureagain(false)
                : setIsPasswordSecureagain(true);
            }}
          />
        }
        activeOutlineColor="#3173F3"
        outlineColor="#3173F3"
        mode="outlined"
        style={styles.Input}
        textContentType="password"
        autoCorrect={false}
        secureTextEntry={isPasswordSecureagain}
        onChangeText={(password) => setConfPassword(password)}
        multiline={false}
        placeholder="Confirme sua senha"
        placeholderTextColor={erro? 'red': '#777777'} 
      ></TextInput>
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          navigation.navigate("ForgetPassword");
        }}
      >
        Esqueceu a senha?
      </Text>
      <TouchableOpacity
        onPress={() => {
          registerUser(email, password, username);
        }}
        style={styles.Button}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.textmedio}>ou</Text>
      <View></View>
    </View>
  );
}
