
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Index from './FeedView';

var Home = React.createClass({
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
      onPressFeed() {
          this.props.navigator.push({name: 'welcome'});
      },

      pop(){
        this.props.navigator.pop();
        // alert("啊啊啊");
      },

      render() {
         console.log("welcome view loaded...")
          return (
              <View style={styles.container}>
                  <Text style={styles.welcome} onPress={this.pop} >
                      欢迎你的到来,这里是Home
                  </Text>
              </View>
          );
      }
  });

  var WelcomeView = React.createClass({
      onPressFeed() {
          this.props.navigator.push({name: 'feed'});
      },


      render() {
         console.log("welcome view loaded...")
          return (
              <View style={styles.container}>
                  <Text style={styles.welcome} onPress={this.onPressFeed} >
                      欢迎你的到来
                  </Text>
              </View>
          );
      }

  });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff',
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

// module.exports = Home;
export {Home as default}
