//import { Navigation } from "react-navigation";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

//import MyTabs from "./Screens/bottomTabs";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground,
} from "react-native";

import { books } from "../data/BooksData";

import { BooksCard } from "./BooksCard";
// import { CategoryList } from "../Component/CategoryList";

import Cart from "../Screens/Cart"; //remove

export default function ScienceBooks({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#131313" }}
    >
      <View style={{ marginTop: 50, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <AntDesign name="search1" size={20} color="white" />
          <TextInput placeholder="search" style={style.input} />
        </View>
        <View style={{ marginTop: 7 }}>
          <AntDesign
            name="shoppingcart"
            size={24}
            color="white"
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      </View>
      {/* <CategoryList /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={books}
        renderItem={({ item }) => <BooksCard books={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  searchContainer: {
    height: 40,
    backgroundColor: "#202020",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    color: "white",
    flex: 1,
    marginLeft: 5,
  },
});
