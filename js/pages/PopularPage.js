import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";


export default class PopularPage extends React.Component {

  constructor() {
    super();
    this.tabNames = ["Java", "Android", "iOS", "React", "PHP", "HTML5", "Vue"];
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach(
      (item, index) => {
        console.log(index + item);
        tabs["tab" + index] = {
          screen: props => <PopularTab {...props} tabLabel={item} />,
          navigationOptions: {
            title: item,
          },
        };
      },
    );

    return tabs;

  }


  topTabbar() {
    return (
      createAppContainer(
        createMaterialTopTabNavigator(
          this._genTabs(),
          {
            tabBarOptions: {
              scrollEnabled: true,
              upperCaseLabel: false,
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
    marginTop: 30,
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
