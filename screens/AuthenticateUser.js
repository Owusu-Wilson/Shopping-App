import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
const bg = require('../res/images/login-bg.png');


function authenticate(params) {
    return params
}
// This screen is raised to register a new user.
export default function AuthenticateUser(params) {
  const navigation = params.navigation;
  
  function getUname(val) {
    return val
  }
  function getPwd(val) {
    return val;
  }







    return (

  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}></ImageBackground>
  <View>
    {/* //view to hold the text fields and button */}
  <View style={styles.form}> 
    <TextInput 
        multiline
        name = "uname"
        style={styles.input}
        placeholder="username"
      
        onChangeText = {getUname}/>
    <TextInput 
        name = "psword"
        multiline
        style={styles.input}
        caretHidden
        placeholder="password"

        onChangeText = {getPwd}/>
      <TouchableOpacity
        onPress={() => {
          alert("Logged In as " + getUname()); // button event handles to the SignUp screen
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 25,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
      
        <Text style={{ paddingLeft: 10, color: "white" }}>Log In </Text>
      </TouchableOpacity>
        </View>
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
    opacity:1,
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
  },
  form:{
    padding: 30,
    alignItems: "center",
    backgroundColor: "#000000c0",
    backfaceVisibility:"hidden",
 
    flex:""
    
    
  }
});

