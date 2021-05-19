import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import FavoritePage from "./FavoritePage";
import MyPage from "./MyPage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DynamicNavigators from "../navigators/DynamicNavigators";

export default class HomePage extends React.Component {

  render() {
    return <DynamicNavigators/>;
  }
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#333",
  },
});
