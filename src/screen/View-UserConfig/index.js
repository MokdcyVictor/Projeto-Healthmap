import React,{useState, useEffect} from 'react';
import styles from './style';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { firebase } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function ViewUserConfig() {
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
          
          
        </View>
      </ScrollView>
    </View>
 );
}