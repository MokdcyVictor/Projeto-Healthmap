import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import styles from "./style";
import Form from "./Form/index";
import Title from "./Title/index";

export default function Signup({ navigation }) {
  return (
    <View style={styles.linearGradient}>
      <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems:'center'}} style={{height : Dimensions.get('window').height,}}>
        <Title />
        <Form />
        <Text style={styles.text} onPress={() => navigation.navigate("Signin")}>
        Já tem uma conta? Entre aqui
        </Text>
      </ScrollView>
    </View>
  );
}
