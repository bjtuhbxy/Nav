import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  NavigatorIOS,
  View,
  Image,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native';

class Nav extends Component
{
  constructor(props) {
    super(props);
    let movies = [
      {title:"电影1"},
      {title:"电影2"},
      {title:"电影3"},
      {title:"电影4"},
      {title:"电影5"},
      {title:"电影6"},
      {title:"电影7"},
      {title:"电影8"},
      {title:"电影9"},
      {title:"电影10"},
    ];
    let dataSource = new ListView.DataSource(
      {
        rowHasChanged: (row1,row2) => row1 !== row2
      }
    );
    this.state = {
      movies: dataSource.cloneWithRows(movies)
    };
    // fetchData(){
    //   fetch(url)
    //     .then(response => response.json)
    //     .then( )
    // }
  }

  render() {
    return (
      <View style={{marginTop:20,backgroundColor:'#335577',flex:1,}}>
      <ListView
      backgroundColor="rgba(0, 0, 0, 0.3)"
      dataSource = {this.state.movies}
      renderRow={
        movie =>
        <View>
        <Text style={styles.cell}>{movie.title}</Text>
        <View style={styles.viewsty}></View>
        </View>
      }
      />
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
