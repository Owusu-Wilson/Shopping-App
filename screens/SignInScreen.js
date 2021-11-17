import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text,TextInput, View } from "react-native";
import Home from "./Home";

import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from "../core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '.'


const image = { uri: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" };

// This screen is raised to register a new user.
export default function SignInScreen() {
    return (

  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <LoginScreen></LoginScreen>
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
    flexDirection:"column",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    maxHeight: 700, 
    width: 350

  },
  input: {
    borderWidth: 2,
    borderRadius:20,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200
  }
});

