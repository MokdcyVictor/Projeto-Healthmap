import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../firebase";

export default function Rotas({ route }) {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDurantion] = useState(null);
  const [info, setInfo] = useState([]);

  const id = route.params?.id;

  useEffect(() => {
    firebase
      .firestore()
      .collection("Ubs")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInfo(doc.data());
        } else {
          console.log('erro')
        }
      })
      .catch((error) => {
        console.log("error getting doument:", error);
      });
  });
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          loadingEnabled={true}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <MapViewDirections
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={{
              latitude: info.Latitude,
              longitude: info.Longitude,
            }}
            onReady={(result) => {
              setDistance(Math.floor(result.distance));
              setDurantion(Math.floor(result.duration));
            }}
            apikey={"AIzaSyCJaHdU1kC3CwIPzDCw75qrhtO8KB0AgE0"}
            strokeWidth={3}
          />
          <Marker
            coordinate={{latitude: info.Latitude, longitude: info.Longitude}}
            pinColor="blue"
          ></Marker>

        </MapView>
      )}
      <View
        style={{
          backgroundColor: "#3173F3",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "10%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignSelf: "flex-start" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("./img/close.png")}
              style={{ width: 50, height: 50, marginLeft: 10 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: "40%",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            {duration} Min
          </Text>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {distance} Km
          </Text>
        </View>
      </View>
    </View>
  );
}
