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

export default class HomePage extends React.Component {
  _tabNavi() {
    return (
      createAppContainer(
        createBottomTabNavigator(
          {
            popularPage: {
              screen: PopularPage,
              navigationOptions: {
                tabBarLabel: "最热",
                tabBarIcon: ({ focused, tintColor }) => (
                  <FontAwesome
                    name={"fire"}
                    size={26}
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
            trendingPage: {
              screen: TrendingPage,
              navigationOptions: {
                tabBarLabel: "上升",
                tabBarIcon: ({ focused, tintColor }) => (
                  <Feather
                    name={"trending-up"}
                    size={26}
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
            favoritePage: {
              screen: FavoritePage,
              navigationOptions: {
                tabBarLabel: "收藏",
                tabBarIcon: ({ focused, tintColor }) => (
                  <MaterialIcons
                    name={"favorite"}
                    size={26}
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
            myPage: {
              screen: MyPage,
              navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({ focused, tintColor }) => (
                  <FontAwesome
                    name={"user"}
                    size={26}
                    style={{ color: tintColor }}
                  />
                ),
              },
            },
          },
        ),
      )
    );
  }

  render() {
    const Tab = this._tabNavi();
    return <Tab />;
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
