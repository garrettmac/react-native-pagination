import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App.js';
AppRegistry.registerComponent('ReactNativePaginationExample', () => App);

/*
 *<Pagination
 * // dotThemeLight //<--use with backgroundColor:"grey"
 * listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
 * paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
 * paginationItems={this.state.items}//pass the same list as data
 * paginationItemPadSize={3} //num of items to pad above and below your visable items
 * // more params you can play with
 * // hideEmptyDots
 * // pagingEnabled
 * // dotSwapAxis
 * // dotPositionSwap
 * // disableDotOnPressNavigation
 * // dotOnPress={(item)=>alert(JSON.stringify(item))}
 * // startDotOnPress={(item)=>alert("pressed startDotOnPress")}
 * // endDotOnPress={(item)=>alert("pressed endDotOnPress")}
 * // startDotIconFamily="Ionicons"
 * // startDotIconName="ios-arrow-back"
 * // endDotIconFamily="Ionicons"
 * // endDotIconName="ios-arrow-forward"
 * // dotIconNameActive={"contacts"}
 * // dotTextColor={"red"}
 * // dotTextColorActive={"green"}
 * // dotTextColorNotActive={"red"}
 * // dotTextColorEmpty={"blue"}
 * // dotIconColorActive={"green"}
 * // dotIconColorNotActive={"red"}
 * // dotIconColorEmpty={"blue"}
 * />
 */
