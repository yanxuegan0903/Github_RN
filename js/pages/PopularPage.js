import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";


export default class PopularPage extends React.Component {
  topTabbar() {
    return (
      createAppContainer(
        createMaterialTopTabNavigator(
          {
            tab1: {
              screen: PopularTab,
              navigationOptions: {
                tabBarLabel: "Tab1",
              },
            },
            tab2: {
              screen: PopularTab,
              navigationOptions: {
                tabBarLabel: "Tab2",
              },
            },
          },
        ),
      )
    );
  }

  render() {
    const TopTabBar = this.topTabbar();

    return (
      <View style={styles.containar}>
        <TopTabBar />
      </View>
    );
  }
}


class PopularTab extends React.Component {
  render() {
    return <View style={styles.tabContainar}>
      <Text style={styles.text}>
        PopularTab
      </Text>
    </View>;
  }
}


const styles = StyleSheet.create({
  containar: {
    flex: 1,
    marginTop:30
  },
  tabContainar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#333",
  },
});
