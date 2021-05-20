import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import NavigatorUtils from "../navigators/NavigatorUtils";
import AsyncStorageDemo from "./AsyncStorageDemo";


export default class FavoritePage extends React.Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>FavoritePage</Text>
        {/*<Button title={'修改主题'} onPress={*/}
        {/*  ()=> navigation.setParams({*/}
        {/*    theme:{*/}
        {/*      tintColor:'red',*/}
        {/*      updateTime: new Date().getTime()*/}
        {/*    }*/}
        {/*  })*/}

        {/*}/>*/}
        <Button title={'go detail'} onPress={()=>{
          NavigatorUtils.goToPage({},'detailPage')
      }}/>
        <Button title={'go Fetch Demo'} onPress={()=>{
          NavigatorUtils.goToPage({},'fetchDemo')
        }}/>
        <Button title={'go AsyncStorageDemo'} onPress={()=>{
          NavigatorUtils.goToPage({},'AsyncStorageDemo')
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
