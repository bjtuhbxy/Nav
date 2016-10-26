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

const moreText = "加载完毕";    //foot显示的文案
//页码
var pageNum = 1;
//每页显示数据的条数
const pageSize = 10;
//页面总数据数
var pageCount = 0;
//页面List总数据
var totalList = new Array();

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
      movies: dataSource.cloneWithRows(movies),
      foot:0,  //0:隐藏  1：加载完成   2：加载中
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
    _renderFooter(){
      if (this.state.foot === 1) {
        return(
          <View>
          <Text style={styles.cell}>啊啊啊啊</Text>
          <View style={styles.viewsty}></View>
          <Text style={styles.cell}>哦哦哦哦</Text>
          <View style={styles.viewsty}></View>
          <Text style={styles.cell}>呃呃呃呃</Text>
          <View style={styles.viewsty}></View>
          <Text style={styles.cell}>咿呀咿呀哟</Text>
          <View style={styles.viewsty}></View>
          </View>
        );
      }else if (this.state.foot === 2) {
        setInterval(() => {
        this.setState({ foot:1 });
      }, 3000);
        return(
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
          <ActivityIndicator
          size="large"
          color="#6435c9"
          />
          <Text style={{color:"#6435c9"}}>正在加载...</Text>
          </View>
        );
      }
    }
    _endReached(){
      // alert("触发上拉操作");
      this.setState({
        foot:2,
      });
    }
    _endReached2(){
      console.log("上拉加载更多");
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
      enableEmptySections={true}
      dataSource = {this.state.movies}
      renderRow={this._renderRow.bind(this)}
      renderFooter={this._renderFooter.bind(this)}
      onEndReached={this._endReached.bind(this)}
      onEndReachedThreshold={-25}
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
