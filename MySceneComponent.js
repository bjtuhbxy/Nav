/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

class Nav extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Welcome to React Native!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         To get started, edit index.ios.js
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Press Cmd+R to reload,{'\n'}
  //         Cmd+D or shake for dev menu
  //       </Text>
  //     </View>
  //   );
  // }
  render() {
            let defaultName = 'FirstPageComponent';
            let defaultComponent = FirstPageComponent;
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
            );
        }
 
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('Nav', () => Nav);
