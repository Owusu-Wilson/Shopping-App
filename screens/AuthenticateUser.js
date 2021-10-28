import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";
const bg = require('../res/images/login-bg.png');

const image = { uri: "https://reactjs.org/logo-og.png" };



function authenticate(params) {
    return params
}
// This screen is raised to register a new user.
export default function AuthenticateUser() {
    return (

  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>

      <Text style={styles.text}>Please Enter Password</Text>
    </ImageBackground>
    <View>
    <TextInput 
        multiline
        style={styles.input}
        placeholder="username"
        // onChangeText = {(val)=>setName(val)}
        onChangeText = {authenticate}/>
    </View>
  </View>
);
    };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity:0.6,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  input: {
    borderWidth: 2,
    borderRadius:20,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
  }
});

