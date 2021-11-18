import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Logo from './Logo';

import BooksList from './BooksList'
import ChildrenBooks from './childrenBooks';
import Novels from './NovelBooks';
import Fictions from './FictionBooks';
import ScienceBooks from './ScienceBooks';
const Tab = createMaterialTopTabNavigator();

export default function Categories() {
  return (
    <Tab.Navigator>

{/* Categories Top navigation */}
      <Tab.Screen name="Children" component={ChildrenBooks} />
      <Tab.Screen name="Fiction" component={Fictions} />
      <Tab.Screen name="Novel" component={Novels} />
      <Tab.Screen name="Science" component={ScienceBooks} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tab: {
    width: '50%',
    alignItems: 'flex-end',
    color: "red"
  },
  
})


