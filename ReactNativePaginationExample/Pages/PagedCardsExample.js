

// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App.js';
// AppRegistry.registerComponent('ReactNativePaginationExample', () => App);

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,
  TouchableOpacity,Image,Animated,
  Text,View,FlatList,} from 'react-native';
//get here [TODO ADD URL]
import TweetItem from './widgets/TweetItem';
import Pagination,{Icon,Dot} from '../react-native-pagination';
import _ from 'lodash';// if you dont have this then gtfo
import {MockTweetList} from '../FakerMocks';

export default class PagedCardsExample extends Component {

  constructor(props){
     super(props);
      this.state = {
        items: MockTweetList,
        // selected: (new Map(): Map<string, boolean>),
      };
      this.onPressDot=this.onPressDot.bind(this)
      this.renderDot=this.renderDot.bind(this)

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

 //map to some key. We use the "id" attribute of each item in our list created in our MockTweetList
  _keyExtractor = (item, index) => item.id

  // REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({viewableItems})

onPressDot=(item)=>console.log(" onPressDot:item ",item);

	componentWillReceiveProps(nextProps) {
    this.AnimatedValue.setValue(0);
  }
renderDot(o,i){
  // console.log(" ##### o: ",o);

    // Animated.timing(this.AnimatedValue, {toValue: (o.isViewable)?1:0,duration: 500}).start()
  let dotComponent=(<Animated.Image resizeMode="center" style={{
    // width: o.isViewable?30:15,
    width: 30,
    // height: o.isViewable?30:15,
    height: 30,
    // transform: [
    //                      {
    //                        scale: this.AnimatedValue.interpolate({
    //                          inputRange: [0, 0.6, 1],
    //                          outputRange: [1, 1.5, 1],
    //                        }),
    //                      },
    //                    ],
    borderRadius: o.isViewable?15:7.5,}} source={{uri:`https://robohash.org/r${o.isViewable}?size=350x350&set=set1`}}/>)

  return (<Dot
    // key={`paginationDot-${i}`}
    //hideEmptyDots
    iconFamily={"Ionicons"}
    color={o.isViewable?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.5)"}
    name={o.isViewable?"logo-twitter":"logo-facebook"}
    //dotComponent={dotComponent}
    //dotComponentContainerStyle={{}}

    onPress={this.onPressDot}
    isViewable={o.isViewable}
    size={o.isViewable?20:15}
    textStyle={{color:"white",fontSize:o.isViewable?15:10}}
    navOnPress

    text={o.index+1}
    //text={o.item.type}

    style={{margin:1,backgroundColor:"transparent",justifyContent: "center",alignItems: "center",}}/>)
}
render() {
  // console.log(" this.state.viewableItems: ",this.state.viewableItems.map(o=>o.index))
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
        // dotThemeLight
        horizontal
        dotOnPress={(o)=>console.log(" clicked: ",o)}
        hideEmptyDots
        pagingEnabled
        //startDotIconFamily="Ionicons"
        //startDotIconName="ios-arrow-back"
        //endDotIconFamily="Ionicons"
        //endDotIconName="ios-arrow-forward"
        //dotIconName="ios-close"
        hideEmptyDots
        dotEmptyHide
        debugMode


        renderDot={this.renderDot}
        //dotIconFamily="Ionicons"
        //dotIconNameNotActive={"logo-twitter"}
        //dotIconNameActive={"logo-twitter"}
        //dotIconColorActive={"white"}
        //dotIconColorNotActive={"rgba(255,255,255,0.5)"}
        // dotIconColorEmpty={"blue"}
        dotIconSizeActive={25}
      //  dotIconSizeNotActive={10}
        // startDotIconSize={30}
        // endDotIconSize={30}
        listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
        ListType={"FlatList"}//needs to track what the user sees
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
