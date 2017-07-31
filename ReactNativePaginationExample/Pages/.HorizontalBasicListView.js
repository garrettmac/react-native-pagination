/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ListView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';
import JobItem from './widgets/JobItem';
import {MockJobsList} from '../FakerMocks';
import Pagination from 'react-native-pagination';
console.log(" Pagination: ",Pagination);
import faker from 'faker';



let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class HorizontalBasicListView extends Component {

  constructor(props){
     super(props);
      this.state = {
        items: MockJobsList,
        // selected: (new Map(): Map<string, boolean>),
      };
      this.renderRow=this.renderRow.bind(this)
    }
  //render list seen here [TODO ADD URL]
  renderRow = (item) => {
    // console.warn(" item: ",item);

    return (<JobItem
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
   }
  //map to some key. We use the "id" attribute of each item in our list created in our PersonList
   _keyExtractor = (item, index) => item.id

 // REQUIRED for ReactNativePagination to work correctly
   onChangeVisibleRows = ( viewableItems, changed ) => {
     viewableItems=_.keys(viewableItems.s1).map(i =>parseInt(i))
     console.log(" viewableItems: ",viewableItems);
     this.setState({viewableItems,changed})
   };

  render() {
    return (
      <View style={[s.container]}>
        <ListView
          horizontal
           pagingEnabled

          dataSource={ds.cloneWithRows(this.state.items)}
          keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
          renderRow={this.renderRow}
          onChangeVisibleRows={this.onChangeVisibleRows.bind(this)}//need this
        />
        <Pagination
          horizontal
          debugMode
            startDotIconSize={25}
            endDotIconSize={25}
            // dotIconNameActive="city"
            dotIconNameNotActive="city"
            pagingEnabled
            dotTextHide
            dotIconSizeNotActive={24}
            dotIconSizeActive={30}
          // dotThemeLight //<--use with backgroundColor:"grey"
          listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
          visablePaginationItems={this.state.viewableItems}//needs to track what the user sees
          paginationItems={this.state.items}//pass the same list as data
          padSize={3} //num of items to pad above and bellow your visable items
          // totalDots={6}
        />
      </View>)
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
