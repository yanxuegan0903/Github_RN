import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";

const InitNavi = createStackNavigator({
  welcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavi = createStackNavigator({
  homePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
});

export const SwitchNavi = createSwitchNavigator({
  initNavi: {
    screen: InitNavi,
    navigationOptions: {
      header: null,
    },
  },
  mainNavi: {
    screen: MainNavi,
    navigationOptions: {
      header: null,
    },
  },
});

