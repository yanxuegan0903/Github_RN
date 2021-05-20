import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView, AsyncStorage } from "react-native";
import Animated from "react-native-reanimated";

export default class AsyncStorageDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };

  }


  render() {
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>AsyncStorageDemo 使用</Text>
        <View style={styles.input_containar}>
          <TextInput style={styles.textInput} onChangeText={(text) => {
            this.saveKey = text;
          }} placeholder={"输入 Key"} />
          <TextInput style={styles.textInput} onChangeText={(text) => {
            this.saveValue = text;
          }} placeholder={"输入 Value"} />
          <View style={styles.button_containar}>
            <Button title={"保存"} onPress={() => {
              this._doSave();
            }} />
            <Button title={"读取"} onPress={() => {
              this._doGet();
            }} />
            <Button title={"删除"} onPress={() => {
              this._doDelete();
            }} />
          </View>
          <View>
            <Text style={styles.text}>操作结果</Text>
            <Text>{this.state.result}</Text>
          </View>
        </View>
      </View>
    );
  }

  _doSave() {
    if (!this.saveKey || !this.saveValue) {
      console.log('输入参数');
      return;
    }
    // 异步方法
    AsyncStorage.setItem(this.saveKey, this.saveValue).catch(error => {
      if (error) {
        console.log(error.toString());
        this.setState({
          result: error.toString(),
        });
      }
    });

    // // 同步方法
    // try {
    //   await AsyncStorage.setItem(this.saveKey,this.saveValue)
    // }catch (error){
    //   if (error) {
    //     console.log(error.toString())
    //     this.setState({
    //       result:error.toString()
    //     })
    //   }
    // }
  }

  _doGet() {

    if (!this.saveKey) {
      console.log('输入参数');
      return;
    }
    // 异步方法
    AsyncStorage.getItem(this.saveKey).then(value => {
      this.setState({
        result: this.saveKey + ":" + value,
      });
    }).catch(error => {
      this.setState({
        result: error.toString(),
      });
    });
  }
  _doDelete() {
    if (!this.saveKey) {
      console.log('输入参数');
      return ;
    }

    //   异步方法
    AsyncStorage.removeItem(this.saveKey).catch(error=>{
      console.log(error.toString())
    })

    // //  同步方法
    // try {
    //   await AsyncStorage.removeItem(this.saveKey)
    // }.catch (error){
    //   console.log(error.toString())
    // }

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
