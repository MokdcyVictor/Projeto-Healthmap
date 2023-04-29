import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Principal() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.background}>
      <View
        style={{
          width: "90%",
          height: 170,
          marginTop: -80,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 15,
          marginBottom: 40,
          borderBottomWidth: 2,
          borderBottomColor: "#CCCCCC",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{ padding: 15, alignItems: "center" }}
            onPress={() => {
              navigation.navigate("FlatList");
            }}
          >
            <Image
              style={styles.img}
              source={require("../image/hospital.png")}
            ></Image>
            <Text style={styles.txt}>Hospitais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/health.png")}
            ></Image>
            <Text style={styles.txt}>UBS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/plus.png")}
            ></Image>
            <Text style={styles.txt}>SPA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/ambulance.png")}
            ></Image>
            <Text style={styles.txt}>Pronto Socorro</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/tooth.png")}
            ></Image>
            <Text style={styles.txt}>Dentista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/boy.png")}
            ></Image>
            <Text style={styles.txt}>Pediatra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/leg.png")}
            ></Image>
            <Text style={styles.txt}>Nutrição</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15, alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../image/doctor.png")}
            ></Image>
            <Text style={styles.txt}>Serviços Gerais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: "100%", height: "auto" }}>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>Hospitais</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../image/more.png")}
          ></Image>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row" }}
        >
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: "100%", height: "auto" }}>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>Pronto Socorro</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../image/more.png")}
          ></Image>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row" }}
        >
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: "100%", height: "auto" }}>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>UBS</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../image/more.png")}
          ></Image>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row" }}
        >
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
          <View style={styles.conteudo}>
            <Image
              style={{
                width: "100%",
                height: "70%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={require("../image/hospital.jpg")}
            ></Image>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
              }}
            >
              <Text style={{ color: "#3173F3" }}>Ver detalhes</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
