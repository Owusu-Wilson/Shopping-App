import React from "react";
import { View, Button, TouchableOpacity,ImageBackground } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import BooksList from "./books_list";



export default function Home(params) {
  return (

    <View style={styles.container}>
      <BooksList/>
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
  