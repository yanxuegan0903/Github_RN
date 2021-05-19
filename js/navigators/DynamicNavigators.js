import React, { Component } from "react";
import PopularPage from "../pages/PopularPage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TrendingPage from "../pages/TrendingPage";
import Feather from "react-native-vector-icons/Feather";
import FavoritePage from "../pages/FavoritePage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MyPage from "../pages/MyPage";
import { createAppContainer } from "react-navigation";
import { BottomTabBar, createBottomTabNavigator } from "react-navigation-tabs";
import { LogBox } from "react-native";


const TABS = {
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
};


export default class DynamicNavigators extends React.Component{
  constructor() {
    super();
  }

  _tabnavigator(){
    const {popularPage,trendingPage,favoritePage,myPage} = TABS;
    const dynamicTabs = {popularPage,trendingPage,favoritePage,myPage};
    return createAppContainer(createBottomTabNavigator(dynamicTabs,{
      tabBarComponent:TabBarComponet
    }));
  }

  render() {
    const BottomTabs = this._tabnavigator();
    return <BottomTabs/>;
  }

}


class TabBarComponet extends React.Component{
  constructor(props) {
    super(props);
    this.theme = {
      tintColor:props.tintColor,
      updateTime:new Date().getTime()
    }
  }

  render() {
    const {routes,index} = this.props.navigation.state;
    // 这是获取当前页面的params
    if (routes[index].params){
      // 去除当前页面的params
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }

    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.activeTintColor}
    />
  }
}
