import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import DetailsPage from "../pages/DetailsPage";
import FetchDemo from "../pages/FetchDemo";
import AsyncStorageDemo from "../pages/AsyncStorageDemo";
import DataStoreDemo from "../pages/DataStoreDemo";

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
  detailPage:DetailsPage,
  fetchDemo:FetchDemo,
  AsyncStorageDemo:AsyncStorageDemo,
  DataStoreDemo:DataStoreDemo
});

const SwitchNavi = createSwitchNavigator({
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
  }
});


export const AppNavigator = createAppContainer(SwitchNavi)
