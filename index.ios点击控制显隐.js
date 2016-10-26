'use strict'
import React, {Component} from 'react';
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
      show:true
    };

    console.log(this.state.show+"sss");
  }
  clickAAA(){
    this.setState({show:this.state.show?false:true});
    console.log(this.state.show);
  }

  render() {

    let _this=this;
    return (
      <View style={styles.viewSty}>

      

      <TouchableOpacity onPress={this.clickAAA.bind(this)}>
      {this.state.show?<View style={{width:100,height:100,backgroundColor:"#ff35f5",borderRadius:12,}}>
      <Text style={{marginTop:20}}>点我干毛？</Text>
      </View>:<Text style={{fontSize:44}}>点我</Text>}
      </TouchableOpacity>
      </View>
    );
  }
}
class Blink extends Component {
  constructor() {
    super(props);
  }
  render(){
    return(
      <View style={{width:100,height:100,backgroundColor:"#ff35f5",borderRadius:12,}}>
      <Text style={{marginTop:20}}>点我干毛？</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewSty:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#dddddd",
  },
});

// 可以选择添加页面
AppRegistry.registerComponent('Nav', () => Nav);
