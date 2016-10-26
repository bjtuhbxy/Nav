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
  ActivityIndicator,
} from 'react-native';


class Nav extends Component
{
  constructor(props) {
    super(props);


}

  render() {
    let movies = "aaaaaaaaaaaaaabaaaaaaaaaaaaaabaaaaaaaaabaaabaaaaaaabaaa";
    let aaa = 0;
    let sss = movies.split(/b/).map(p => {
      aaa++;
      return(
        <View key={aaa} style={{marginBottom:10,paddingLeft:6,paddingRight:6}}>
        <Text>{p}</Text>
        </View>
      );
    });
    return (
      <View style={{justifyContent:"center",marginTop:20,backgroundColor:'#335577',flex:1,}}>
      <View style={{alignItems:"center"}}>{sss}</View>
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
