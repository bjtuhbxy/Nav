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
  RefreshControl,
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
      isRefreshing:false,
      movies: dataSource.cloneWithRows(movies)
    };
  }

    _onRefresh(){
      // alert("asd");
      this.setState({ isRefreshing:true });
      setInterval(() => {
      this.setState({ isRefreshing:false });
    }, 1000);
    }

    _renderRow(movie){
      return(
        <View>
        <Text style={styles.cell}>{movie.title}</Text>
        <View style={styles.viewsty}></View>
        </View>
      );
    }
    _renderFooter(movie){
      return(
        <View>
        <Text style={styles.cell}>这不仅仅是一部电影那么简单</Text>
        <View style={styles.viewsty}></View>
        </View>
      );
    }
    _endReached(){

    }

  render() {
    return (
      <View style={{marginTop:20,backgroundColor:'#335577',flex:1,}}>
      <ListView
      refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
      backgroundColor="rgba(0, 0, 0, 0.3)"
      dataSource = {this.state.movies}
      renderRow={
        this._renderRow.bind(this)
      }
      renderFooter={
        this._renderFooter.bind(this)
      }
      onEndReached={this._endReached.bind(this)}
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
