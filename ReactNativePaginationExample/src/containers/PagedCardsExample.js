
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,
  TouchableOpacity,Image,Animated,
  Text,View,FlatList,} from 'react-native';

import TweetItem from './widgets/TweetItem';
import Pagination,{Icon,Dot} from '../../react-native-pagination';
import _ from 'lodash';
import {MockTweetList} from '../mocks';

export default class PagedCardsExample extends Component {

  constructor(props){
     super(props);
      this.state = {
        items: MockTweetList,

      };
      this.onPressDot=this.onPressDot.bind(this)

      this.AnimatedValue=new Animated.Value(0)
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
// componentDidMount() {
// setTimeout(() => {
//   this.setState({items:MockTweetList})
// }, 3000);
// }

  _keyExtractor = (item, index) => item.id

  // REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({viewableItems})

onPressDot=(item)=>console.log(" onPressDot:item ",item);

	componentWillReceiveProps(nextProps) {
    this.AnimatedValue.setValue(0);
  }




render() {
  let loadingComponent =(<Text style={[s.textStyle]}>Loading</Text>)
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
        lightTheme
        horizontal
        // to allow React Native Pagination to scroll
        // (make sure list has "ref={r=>this.refs=r}")
        refs={this.refs}
        showEndDot
        showStartDot
        pagingEnabled
        //loadingComponent={loadingComponent}
        // renderDot={this.renderDot}
        dotIconSizeActive={25}
        paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
        paginationItems={this.state.items}//pass the same list as data
        paginationItemPadSize={4} //num of items to pad above and bellow your visable items
      />

    </View>)
  }
}
const s = StyleSheet.create({
  textStyle:{color:"rgba(0,0,0,0.5)", textAlignVertical: "center", textAlign: "center",},
  container: {
    flex: 1,
    backgroundColor:"grey",//<-- use with "dotThemeLight"
  },
  paginationDotStyle:{margin:1,backgroundColor:"transparent",justifyContent: "center",alignItems: "center",},

});
