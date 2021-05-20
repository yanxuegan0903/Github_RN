import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import {connect} from "react-redux";
import actions from '../../js/action'
class TrendingPage extends React.Component {

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.containar}>
        <Text style={styles.text}>TrendingPage</Text>
        {/*<Button title={'修改主题'} onPress={*/}
        {/*  ()=> this.props.onThemeChange('orange')*/}

        {/*}/>*/}
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


const mapDispatchToProps = dispatch => ({
  onThemeChange:theme=>dispatch(actions.onThemeChange(theme))
})

export default connect(null,mapDispatchToProps)(TrendingPage)
