import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  NavigatorIOS,
  View,
  ScrollView
} from 'react-native';

// var SimpleView = require('./navigator_simple.js');
// var Nav = require('./navigator_uniform.js');
var Nav = require('Nav');

var Nav = React.createClass({

    configureScene(route){
      //淡入淡出效果
      return Navigator.SceneConfigs.FloatFromRight;
    },

    renderScene(router, navigator){
      var Component = router.component;
      this._navigator = navigator;
      switch(router.name){
        case "welcome":
          Component = WelcomeView;
          break;
        case "feed":
          Component = FeedView;
          break;
        default: //default view
          Component = DefaultView;
      }

      return <Component navigator={navigator} />
    },

    render() {
        return (
            <Navigator
            //指定初始化进入的界面
                initialRoute={{
                  component: Detail,
                	name: 'welcome',
                	title: '游轮'
                }}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />

         //    <NavigatorIOS  
        	// 	style={styles.flex}  
        	// 	initialRoute={{  
         //  		// component: List,  
         //  		name: 'welcome',
         //  		title: '游轮',  
         //  		passProps: {},  
        	// 	}}  
        	// >  
        );
    }

});
class Detail extends React.Component {  
  render() {  
    return (  
      <ScrollView>  
        <Text style={styles.detail_text}>详情页面</Text>  
        <Text style={styles.detail_text}>详情信息介绍</Text>  
      </ScrollView>  
    );  
  }  
}  

var FeedView = React.createClass({
  goBack(){
    this.props.navigator.push({name:"default"});
  },
  pop(){
    this.props.navigator.pop();
  },
    render() {
        return (
          <View>
          <View style={styles.aaa}>
          <View>
          <Text style = {styles.ret} onPress = {this.pop}>返回</Text>
          </View>
          <View>
          <Text style = {styles.title} >标题</Text>
          </View>
          </View>
            <View style={styles.container}>

                <Text style={styles.welcome} onPress={this.goBack} >
                   进入下一个页面
                </Text>
                <Text style={styles.welcome} onPress={this.pop} >
                   返回上一页面
                </Text>
            </View>
            </View>  
        )
    }
});

var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
       console.log("welcome view loaded...")
        return (
          <View>
          <View style={styles.aaa}>
          
          <Text style = {styles.title} >标题</Text>
          </View>
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    欢迎你的到来
                </Text>
                
            </View>
            </View>
        );
    }

});

var DefaultView = React.createClass({
  goBack(){
    this.props.navigator.pop();
  },
    render(){
      return (
        <View>
        <View style={styles.aaa}>
          <Text style = {styles.title} >标题</Text>
          </View>
          <View style={styles.container}>
              <Text style={styles.welcome} onPress={this.goBack}>下面没有了,回去吧。</Text>
          </View>
      </View>
      )
    }
});

const styles = StyleSheet.create({
  ret:{
    paddingLeft:5,
    color:'#ff3300',
    // textAlign:'left',
  },
  title:{
    // float:'clear',
    // clear:'both',
    color:'#ff3300',
    alignItems:'center',
    textAlign:'center',
    justifyContent: 'center',
  },
  aaa:{
    // flexDirection:'row',
    width:320,
    height:68,
    // color:'#FFFFFF',
    backgroundColor:'#0033FF',
    // alignItems: 'center',
    justifyContent: 'center',
  },
	flex: {  
    flex: 1,  
  },  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('Nav', () => Nav);



// 可以选择添加页面
AppRegistry.registerComponent('Nav', () => Nav);

