

// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App.js';
// AppRegistry.registerComponent('ReactNativePaginationExample', () => App);

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,FlatList,} from 'react-native';
//get here [TODO ADD URL]
import ListItem from './widgets/ListItem';
import Pagination from '../react-native-pagination';
import faker from 'faker';//assuming you have this.
import _ from 'lodash';// if you dont have this then gtfo

// create a random list (array) of 35 people
let PersonList = new _.times(35,(i)=>{
  return {
    id:i,//<-- used in _keyExtractor
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(["Work","Friend","Acquaintance","Other"]),
    email:faker.internet.email(),
  }
})



export default class ReactNativePaginationExample extends Component {

  constructor(props){
     super(props);
      this.state = {
        items: PersonList,
        // selected: (new Map(): Map<string, boolean>),
      };
    }
  //render list seen here [TODO ADD URL]
  _renderItem = ({item}) => {
    return (<ListItem
       index={item.id}
       id={item.id}
       onPressItem={this._onPressItem}
      //  selected={!!this.state.selected.get(item.id)}
       name={item.name}
       avatar={item.avatar}
       description={item.email}
       tag={item.group}
       createTagColor
     />)
 };

 //map to some key. We use the "id" attribute of each item in our list created in our PersonList
  _keyExtractor = (item, index) => item.id

// REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({viewableItems,changed})
  };

render() {
  return (
    <View style={[s.container]}>
      <FlatList
        data={this.state.items}
        keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
        renderItem={this._renderItem}
        onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}//need this
      />
      <Pagination
        // dotThemeLight //<--use with backgroundColor:"grey"
        listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
        visible={this.state.viewableItems}//needs to track what the user sees
        data={this.state.items}//pass the same list as data
        padSize={3} //num of items to pad above and bellow your visable items
        // totalDots={6}
      />
    </View>)
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"grey",//<-- use with "dotThemeLight"
  },
});
