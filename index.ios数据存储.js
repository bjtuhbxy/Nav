'use strict'
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Navigator,
  View,
  Image,
  ScrollView,
  RefreshControl,
  ListView,
  Picker,
  AsyncStorage,
  TouchableOpacity,
  ProgressViewIOS,
  Silder,
  ActivityIndicator,
} from 'react-native';



class Nav extends Component
{
  constructor(props) {
    super(props);
    this.state={
      text:"aaaa"
    };
  }
  query(){
    AsyncStorage.setItem(
      'name',"dadada"
    );
  }
  select(){
    AsyncStorage.getItem('name')
    .then((name)=>{
      if (name) {
        this.setState({
          text:name
        })
      }
    })
  }
  render() {

    return (
      <View style={styles.viewSty}>
      <View style={{marginTop:20,flexDirection:"row",}}>
      <TextInput
        style={{width:260,height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:4}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <View style={{
        width:60,height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#3333ff",
        borderRadius:5
      }}
      >
      <Text style={{textAlign: "center",padding:10,alignItems:"center", textAlignVertical:"bottom",color:"white"}}
      onPress={this.select.bind(this)}
      >查询</Text>
      </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewSty:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#ffffff",
  },
});

// 可以选择添加页面
AppRegistry.registerComponent('Nav', () => Nav);
