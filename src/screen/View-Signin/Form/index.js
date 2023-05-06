import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Linking,
  BackHandler,
} from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../../firebase";
import Tabs from "../../../../navigation/tabs";

export default function Form() {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Tabs");
      }
    });

    return unsubscribe;
  }, []);

  const loginUser = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(), password.trim());
      navigation.replace("Tabs");
    } catch (error) {
      setErro(true)
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.context}>
      <TextInput
        left={<TextInput.Icon icon={"account"} iconColor={erro? 'red': '#3173F3'} />}
        activeOutlineColor='#3173F3'
        outlineColor='#3173F3'
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={[styles.Input]}
        autoComplete="email"
        multiline={false}
        placeholder="Informe seu E-mail"
        placeholderTextColor={erro? 'red': '#777777'}
      ></TextInput>
      <TextInput
        left={<TextInput.Icon icon={"lock"} iconColor={erro? 'red': '#3173F3'} />}
        right={
          <TextInput.Icon
            icon={isPasswordSecure ? "eye" : "eye-off"}
            iconColor={'#3173F3'}
            onPress={() => {
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true);
            }}
          />
        }
        activeOutlineColor="#3173F3"
        outlineColor="#3173F3"
        mode="outlined"
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.Input}
        textContentType="password"
        autoCorrect={false}
        secureTextEntry={isPasswordSecure}
        multiline={false}
        placeholder="Digite sua senha"
        placeholderTextColor={erro? 'red': '#77777'}
      ></TextInput>
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          navigation.navigate("ForgetPassword");
        }}
      >
        {" "}
        Esqueceu a senha?
      </Text>
      <TouchableOpacity
        onPress={() => {
          loginUser(email, password);
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
