import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  Image,
  ScrollView,
  RefreshControl,
  ListView,
  Picker,
  WebView,
  ActivityIndicator,
} from 'react-native';



class Nav extends Component
{
  constructor(props) {
    super(props);
    this.state={
      language:"请选择您需要的编程语言"
    };
  }


  render() {
    return (
      <View>
      <WebView
      style={{width:320,height:568}}
      source={{uri:'https://www.baidu.com/'}}>
      </WebView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewsty: {
    width:320,
    height: 1,
    backgroundColor:'#333333'
  },
  cell: {
    width:320,
    height:66,
    fontSize:26,
    paddingTop:20,
    backgroundColor:'#ffffff',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

// 可以选择添加页面
AppRegistry.registerComponent('Nav', () => Nav);
