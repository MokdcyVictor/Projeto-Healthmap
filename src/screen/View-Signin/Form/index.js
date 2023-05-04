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
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Tabs");
      }
    });

    return unsubscribe;
  }, []);

  const loginUser = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(), password.trim());
      navigation.navigate("Tabs");
    } catch (error) {
      alert(error.message);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.context}>
      <TextInput
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.Input}
        autoComplete="email"
        multiline={false}
        placeholder="Informe seu E-mail"
      ></TextInput>
      <TextInput
      right={
        <TextInput.Icon
        name={() => <Image source={require('../image/invisible.png')}></Image>} // where <Icon /> is any component from vector-icons or anything else
        onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
      />
      }
      mode="outlined"
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.Input}
        textContentType="password"
        autoCorrect={false}
        secureTextEntry={isPasswordSecure}
        multiline={false}
        placeholder="Digite sua senha"
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
