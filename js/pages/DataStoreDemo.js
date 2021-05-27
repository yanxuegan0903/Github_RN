import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView, AsyncStorage } from "react-native";
import Animated from "react-native-reanimated";
import DataStore from "../expands/dao/DataStore";



export default class DataStoreDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
    this.dataStore = new DataStore();
  }


  render() {
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>DataStoreDemo 使用</Text>
        <View style={styles.input_containar}>
          <TextInput style={styles.textInput} onChangeText={(text) => {
            this.searchKey = text;
          }} placeholder={"输入 Key"} />
          <View style={styles.button_containar}>
            <Button title={"搜索"} onPress={() => {
              this._doSearch();
            }} />
          </View>
          <View>
            <Text style={styles.text}>操作结果</Text>
            <ScrollView style={{margin:15}}>
              <Text>{this.state.result}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

  _doSearch() {
    let url = "https://api.github.com/search/repositories?q=" + this.searchKey;

    this.dataStore.fetchData(url).then((wrapData) => {
      this.setState({
        result:`首次加载时间 ${new Date(wrapData.timeStamp)} ,data:${JSON.stringify(wrapData.data)}`
      })
    }).catch((error) => {
        this.setState({
          result:error.toString()
        })
    });
  }
}


const styles = StyleSheet.create({
  containar: {
    flex: 1,
  },
  text: {
    marginTop: 30,
    fontSize: 30,
    color: "#333",
    alignSelf: "center",
  },
  input_containar: {
    flexDirection: "column",
  },
  textInput: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    fontSize: 20,
    paddingLeft: 5,
    borderRadius: 5,
  },
  button_containar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 1,
    // borderRadius: 5,
    // fontSize:30
  },
});
