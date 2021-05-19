import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import NavigatorUtils from "../navigators/NavigatorUtils";


export default class FavoritePage extends React.Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>FavoritePage</Text>
        <Button title={'修改主题'} onPress={
          ()=> navigation.setParams({
            theme:{
              tintColor:'red',
              updateTime: new Date().getTime()
            }
          })

        }/>
        <Button title={'go detail'} onPress={()=>{
          NavigatorUtils.goToPage({},'detailPage')
      }}/>
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
