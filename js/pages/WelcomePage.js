import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigatorUtils from "../navigators/NavigatorUtils";

export default class WelcomePage extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      console.log('2秒到');
      NavigatorUtils.resetToHomePage(this.props)
    }, 2000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#333',
  },
});
