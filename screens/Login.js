import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

let books_img_url = "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80";
export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
        //   transform: [{ rotate: "45deg" }],
          borderRadius: 25,
          marginBottom: 60,
          width: 250,
          height: 250,
          shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        // elevation: 6,
        }}
        source={{
          uri:"https://images.unsplash.com/photo-1513001900722-370f803f498d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" ,
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Rene BookStore</Text>
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="login" size={30} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sign");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="adduser" size={24} color="white" backgroundColor="red" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
