import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./style";
import { firebase } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function ViewUser() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigation = useNavigation();
  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("user does not exist");
        }
      });
  });

  function exit() {
    firebase.auth().signOut().then(() => {
      navigation.replace('Signin')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ height: "auto" }}
      >
        <View style={{ width: "100%", height: "30%", alignItems: "flex-end" }}>
          <Image
            style={{ width: 100, height: 100, margin: 20 }}
            source={require("./image/logo.png")}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "70%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 150, height: 150, marginTop: -100 }}
            source={require("./image/avatar.png")}
          ></Image>
          <Text style={{ marginTop: 20, fontSize: 20 }}>{name.username}</Text>
          <TouchableOpacity
          onPress={()=>{navigation.navigate("UserConfig")}}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("./image/person.png")}
            ></Image>
            <View>
              <Text style={{ fontSize: 15 }}>Informações da Conta</Text>
              <Text style={{ fontSize: 13, color: "gray" }}>
                Veja as informações da sua conta, como endereço de email.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("./image/lock.png")}
            ></Image>
            <View>
              <Text style={{ fontSize: 15 }}>Alterar a Senha</Text>
              <Text style={{ fontSize: 13, color: "gray" }}>Altere a sua senha a qualquer momento.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: "#3173F3",
                marginRight: 10,
              }}
              source={require("./image/heart_slash.png")}
            ></Image>
            <View>
              <Text style={{ fontSize: 15 }}>Desativar a Conta</Text>
              <Text style={{ fontSize: 13, color: "gray" }}>Desative sua conta a qualquer momento.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{exit()}}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              width: "90%",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("./image/exit.png")}
            ></Image>
            <View>
              <Text style={{ color: "red" }}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
