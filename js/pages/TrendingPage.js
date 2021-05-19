import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TrendingPage extends React.Component {

  render() {
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>TrendingPage</Text>
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
