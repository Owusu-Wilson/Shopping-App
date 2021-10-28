import React from "react";
import { View, Button, TouchableOpacity,ImageBackground } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import ItemPopup from "./bikes_list";

// this is a dummy page from the react native stack examples
let a = "book";
let num_of_scrollables = 30; 
const home_bg_img = require('../res/images/login-bg.png');
// forcing changes

export default function Home(params) {
  return (

    <View style={styles.container}>
      <ImageBackground source={home_bg_img} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Home</Text>
      </ImageBackground>
    </View>
  );
      };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  