import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

export default class MyPage extends React.Component {

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.containar}>
        <Text style={styles.text}>MyPage</Text>
        <Button title={'修改主题'} onPress={
          ()=> navigation.setParams({
            theme:{
              tintColor:'#6fba2c',
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
