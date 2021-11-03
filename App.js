import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
// import AuthenticateUser from "./screens/AuthenticateUser";
import BooksList from "./screens/books_list";
import SignIn from './screens/SignIn'


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
          <MainNavigator.Screen name="SignIn" component={SignIn} />
          
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="SignUp" component={SignUp} />
          {/* <MainNavigator.Screen name="AuthenticateUser" component={AuthenticateUser} /> */}
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
