import React,{Component} from "react";
import {Provider} from "react-redux";
import { AppNavigator } from "./navigators/AppNavigators";
import store from './store'
export  default  class  App extends React.Component{
  render() {
    return <Provider store={store}>
      <AppNavigator/>
    </Provider>
  }
}
