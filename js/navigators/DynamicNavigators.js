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
import {connect} from "react-redux";

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


class DynamicNavigators extends React.Component{
  constructor() {
    super();
  }

  _tabnavigator(){
    if (this.tabs){
      return this.tabs;
    }
    const {popularPage,trendingPage,favoritePage,myPage} = TABS;
    const dynamicTabs = {popularPage,trendingPage,favoritePage,myPage};
    return this.tabs = createAppContainer(createBottomTabNavigator(dynamicTabs,{
      tabBarComponent:props=>{
        return <TabBarComponet theme = {this.props.theme} {...props}/>
      }
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
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />
  }
}


const mapStateToProps = state =>({
  theme:state.theme.theme
})

export default connect(mapStateToProps)(DynamicNavigators)
