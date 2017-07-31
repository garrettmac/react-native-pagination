

// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App.js';
// AppRegistry.registerComponent('ReactNativePaginationExample', () => App);

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,FlatList,} from 'react-native';
//get here [TODO ADD URL]
import TweetItem from './widgets/TweetItem';
import Pagination from 'react-native-pagination';
import _ from 'lodash';// if you dont have this then gtfo
import {MockTweetList} from '../FakerMocks';

export default class HorizontalPagedFlatListExample extends Component {

  constructor(props){
     super(props);
      this.state = {
        items: MockTweetList,
        // selected: (new Map(): Map<string, boolean>),
      };
    }
  //render list seen here [TODO ADD URL]
  _renderItem = ({item}) => {
    return (<TweetItem
       index={item.id}
       id={item.id}
       onPressItem={this._onPressItem}
       title={item.title}
       city={item.city}
       type={item.type}
       color={item.color}
       description={item.description}
       image={item.image}
     />)
 };

 //map to some key. We use the "id" attribute of each item in our list created in our MockTweetList
  _keyExtractor = (item, index) => item.id

  // REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({viewableItems})

render() {
  return (
    <View style={[s.container]}>
      <FlatList
        horizontal
         pagingEnabled
         ref={r=>this.refs=r}
        data={this.state.items}
        keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
        renderItem={this._renderItem}
        onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}//need this
      />
      <Pagination
        dotThemeLight
        horizontal
        dotOnPress={(o)=>console.log(" clicked: ",o)}
        hideEmptyDots
        pagingEnabled
        startDotIconFamily="Ionicons"
        startDotIconName="ios-arrow-back"
        endDotIconFamily="Ionicons"
        endDotIconName="ios-arrow-forward"
        // dotIconSizeActive={30}
      //  dotIconSizeNotActive={10}
        // startDotIconSize={30}
        // endDotIconStyle={{height:30,flex:1,justifyContent:"flex-end", backgroundColor:"red",width:10}}
        // startDotIconStyle={{height:30,flex:1,justifyContent:"flex-start", backgroundColor:"red",width:10}}
        // endDotIconSize={30}
        listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
        paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
        paginationItems={this.state.items}//pass the same list as data
        paginationItemPadSize={3} //num of items to pad above and bellow your visable items
      />

    </View>)
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"grey",//<-- use with "dotThemeLight"
  },
});
