import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  Navigator,
  NavigatorIOS,
  View,
  Image,
  ScrollView
} from 'react-native';

// var SimpleView = require('./navigator_simple.js');
// var Nav = require('./navigator_uniform.js');

// class MoreCustomButton extends React.Component {
//     render() {
//         return (
//             <View>
//                 style={styles.button}
//                 underlayColor="#a5a5a5"
//                 onPress={this.props.onPress}>
//                 <Text style={styles.buttonText}>{this.props.text}</Text>
//             </View>
//         );
//     }
// }


class Nav extends Component {
    render() {
        return (
            <View style = {styles.aaa}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   aaa:{
    width:320,
    height:68,
    fontSize: 30,
    // color:'#FFFFFF',
    backgroundColor:'#0033FF',
    alignItems: 'center',
    // textAlign: 'center',
    justifyContent: 'center',
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderColor:'black',
        borderWidth:1,
        width:360,
    },
    itemview:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'black',
        borderRightWidth:0.5,
        borderLeftWidth:0.5,
        borderTopWidth:1,
        borderBottomWidth:1,
        height:210,
    },
    row:{
        flexDirection: 'row',
    },
    button: {
        flex:1,
        margin:10,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }

});

module.exports = Nav;


// 可以选择添加页面
// AppRegistry.registerComponent('Nav', () => Nav);