import React from "react";
import { View, Button, TouchableOpacity,ImageBackground, Settings } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Home";
import AppSettings from "G:/COURSES/SCHOOL/L200/SECOND SEMESTER/COURSES/Mobile Dev/REACT PROJECTS/Shopping-App/screens/shared/AppSettings";

const Tab = createBottomTabNavigator();

export default function ButtomTabs(params) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={AppSettings} />
    </Tab.Navigator>
  );
};



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

  });
  