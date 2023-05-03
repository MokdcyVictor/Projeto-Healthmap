import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { firebase } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function ViewFlatList() {
  const navigation = useNavigation();
  const [unidade, setUnidade] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("ubs")
      .onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setUnidade(list);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#3173F3",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          backgroundColor: "#3173F3",
          width: "100%",
          height: 110,
          alignItems: "center",
          flexDirection: "row",
          justifyContent:'space-between'
        }}
      >
        <TouchableOpacity style={{margin:10}} onPress={()=>{navigation.goBack()}}>
          <Image source={require("./img/retornar.png")}></Image>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold",marginRight:'30%'}}>
          Hospitais
        </Text>
      </View>
      <FlatList
        style={{
          width: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
        data={unidade}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginTop: 20,
                borderWidth: 2,
                borderColor: "#CCCCCC",
                width: "90%",
                borderRadius: 15,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  width: "100%",
                  height: 150,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    resizeMode: "cover",
                  }}
                  source={require("./img/hospital.jpg")}
                ></Image>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    padding: 10,
                  }}
                >
                  {item.nome}
                </Text>
              </View>
              <View style={{ flexDirection: "row", height: 50 }}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Hospital', {
                  id:item.id,
                })}}
                  style={{
                    width: "50%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRightColor: "#CCCCCC",
                    borderRightWidth: 2,
                  }}
                >
                  <Text style={{ color: "#3173F3", fontSize: 16 }}>
                    Detalhes
                  </Text>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("./img/more.png")}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Map')}}
                  style={{
                    width: "50%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#3173F3", fontSize: 16 }}>
                    Ver no mapa
                  </Text>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("./img/more.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}
