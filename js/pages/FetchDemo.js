import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput,ScrollView} from "react-native";
import NavigatorUtils from "../navigators/NavigatorUtils";


export default class FetchDemo extends React.Component {

  constructor() {
    super();
    this.state={
      showText:''
    }
  }
  _cllickSearch(){
    let url = 'https://api.github.com/search/repositories?q='+this.searchKey;
    console.log(url);
    fetch(url)
      .then(response => response.text())
      .then(responseText=>{
        this.setState({
          showText: responseText
        })
      })
  }
  _cllickSearch2(){
    let url = 'https://api.github.com/search/repositories?q='+this.searchKey;
    console.log(url);
    fetch(url)
      .then(response => {
        if (response.ok){
          return response.text()
        }
        throw Error('network disConnect');
      })
      .then(responseText=>{
        this.setState({
          showText: responseText
        })
      }).catch(error=>{
        this.setState({
          showText:error.toString()
        })
    })
  }


  render() {
    return (
      <View style={styles.containar}>
        <Text style={styles.text}>FavoritePage</Text>
        <View style={styles.input_containar}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text)=>{
              this.searchKey = text;
            }}
          />
          <Button title={'搜索'} onPress={()=>{
            this._cllickSearch2();
          }}/>
        </View>
        <ScrollView>
          <Text>{this.state.showText}</Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containar: {
    flex: 1,
  },
  text: {
    marginTop:30,
    fontSize: 30,
    color: '#333',
    alignSelf:'center'
  },
  input_containar:{
    flexDirection:'row'
  },
  textInput:{
    height:50,
    flex: 1,
    borderColor:'black',
    borderWidth:1
  }
});
