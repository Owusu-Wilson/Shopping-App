import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import SignUpScreen from "./screens/SignUpScreen";

import  Login  from "./screens/Login";
// import AuthenticateUser from "./screens/AuthenticateUser";
import BooksList from "./components/BooksList";
import SignInScreen from './screens/SignInScreen'


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Welcome" component={Welcome} />
          <MainNavigator.Screen name="SignInScreen" component={SignInScreen} />
          <MainNavigator.Screen name="Login" component={Login} />
          
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="SignUpScreen" component={SignUpScreen} />
          <MainNavigator.Screen name="BooksList" component={BooksList} />

          
        
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
