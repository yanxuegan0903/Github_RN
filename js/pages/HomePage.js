import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DynamicNavigators from "../navigators/DynamicNavigators";
import NavigatorUtils from "../navigators/NavigatorUtils";

export default class HomePage extends React.Component {

  render() {
    NavigatorUtils.navigation = this.props.navigation;
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
