import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
} from "react-native";

export default function FlatList() {
  return (
    <ScrollView
      style={{
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
          justifyContent: "center",
          flexDirection:'row',
          
        }}
      >
        <TouchableOpacity>
            <Image source={require('./img/retornar.png')}></Image>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Hospitais
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          height: 1000,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            marginTop: 20,
            borderWidth: 2,
            borderColor: "#CCCCCC",
            width: "90%",
            borderRadius: 15,
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
                resizeMode:'cover'
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
              Hospital 28 de agosto
            </Text>
          </View>
          <View style={{ flexDirection: "row", height: 50 }}>
            <TouchableOpacity
              style={{
                width: "50%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRightColor:'#CCCCCC',borderRightWidth:2
              }}
            >
              <Text style={{ color: "#3173F3", fontSize:16 }}>Detalhes</Text>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./img/more.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "50%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#3173F3", fontSize:16 }}>Ver no mapa</Text>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./img/more.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
