import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

export default class TrendingPage extends React.Component {

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.containar}>
        <Text style={styles.text}>TrendingPage</Text>
        <Button title={'修改主题'} onPress={
          ()=> navigation.setParams({
            theme:{
              tintColor:'#345634',
              updateTime: new Date().getTime()
            }
          })

        }/>
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
