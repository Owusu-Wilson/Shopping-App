import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import ItemPopup from "./bikes_list";




export default function Home(params) {
  return (
    <View style={{ flex: 1 }}>
        <Text>Here is the home screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  round_btn: {
    marginTop: 20,
    width: 150,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
  },
});