



<p align="center">
  <img alt="react-native-pagination" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-pagination/react-native-pagination.jpg" width="308">

</p>

<p align="center">
  The best Pagination component for React Native.
</p>

<p align="center">
  <a href="http://standardjs.com/"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-pagination"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-pagination.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-pagination"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-pagination.svg?style=flat-square"></a>
  <a href="https://github.com/garrettmac/react-native-pagination/pulls?q=is%3Apr+is%3Aclosed"><img alt="PR Stats" src="https://img.shields.io/issuestats/i/github/garrettmac/react-native-pagination.svg?style=flat-square"></a>
  <a href="https://github.com/garrettmac/react-native-pagination/issues?q=is%3Aissue+is%3Aclosed"><img alt="Issue Stats" src="https://img.shields.io/issuestats/p/github/garrettmac/react-native-pagination.svg" style=flat-square"></a>
  <a href="https://gitter.im/garrettmac/react-native-pagination?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat" src="https://badges.gitter.im/garrettmac/react-native-pagination.svg"></a>
</p>

# react-native-pagination

## Roadmap

> see: [ROADMAP.md](ROADMAP.md)

## Show Cases

> To try these out yourself its prudy easy, Just open `examples/ios/*.xcodeproj` in Xcode, then press `Cmd + R`; you may edit `examples/index.ios.js` for switch cases.


### Horizontal Pagination

#### [HorizontalAdvancedFlatList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/HorizontalAdvancedFlatList.js)
#### [HorizontalBasicFlatList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/HorizontalBasicFlatList.js)
#### [HorizontalBasicListView.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/HorizontalBasicListView.js)
#### [HorizontalBasicSectionList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/HorizontalBasicSectionList.js)

<p align="center">
  <img alt="react-native-pagination horizontal" src="http://i.imgur.com/gNMF3EP.gifv" width="208">
  <img alt="react-native-pagination vertical" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-pagination/react-native-pagination-vert.gif" width="208">
  <img alt="react-native-pagination lighttheme" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-pagination/react-native-pagination-vert-lighttheme.gif" width="208">
</p>



### Vertical Pagination

#### [VerticalAdvancedFlatList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/VerticalAdvancedFlatList.js)
#### [VerticalBasicFlatList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/VerticalBasicFlatList.js)
#### [VerticalBasicListView.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/VerticalBasicListView.js)
#### [VerticalBasicSectionList.js](https://github.com/garrettmac/react-native-pagination/blob/master/ReactNativePaginationExample/Pages/VerticalBasicSectionList.js)

<p align="center">
  <img alt="react-native-pagination horizontal" src="http://i.imgur.com/gNMF3EP.gifv" width="208">
  <img alt="react-native-pagination vertical" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-pagination/react-native-pagination-vert.gif" width="208">
  <img alt="react-native-pagination lighttheme" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-pagination/react-native-pagination-vert-lighttheme.gif" width="208">
</p>




## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
  + [Basic](#basic)
  + [Pagination](#pagination)
  + [Props of Children](#props-of-children)
- [Examples](#examples)
- [Development](#development)


* [Getting Started](#getting-started)
  + [Installation](#installation)
  + [Basic Usage](#basic-usage)
    - [Pagination Container / Basic Props](#pagination-container---basic-props)
  + [Dot Icons](#dot-icons)
    - [Start/End Dots Only](#start-end-dots-only)
    - [Pagination Dots Only](#pagination-dots-only)
  + [Dot Text (Numbering Displayed)](#dot-text--numbering-displayed-)
    - [Start/End Dots Only](#start-end-dots-only-1)
    - [Pagination Dots Only](#pagination-dots-only-1)
    - [Advanced Positioning](#advanced-positioning)
    - [Visibility](#visibility)

## Installation

```bash
$ npm i react-native-pagination --save
```

## Basic Usage

- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,FlatList,} from 'react-native';
//get here [TODO ADD URL]
import ListItem from './Pages/widgets/ListItem';
import Pagination from 'react-native-pagination';
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
      };

  //render list seen here [TODO ADD URL]
  _renderItem = ({item}) => {
    return (<ListItem
       index={item.id}
       id={item.id}
       onPressItem={this._onPressItem}
       selected={!!this.state.selected.get(item.id)}
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


AppRegistry.registerComponent('ReactNativePaginationExample', () => ReactNativePaginationExample);

```



#### Pagination Container / Basic Props
| Prop  | Default  | Type | Description |
|------------------|------------------|------------------|------------------|
|dotThemeLight |`false`|`bool`| if you pass in the `dotThemeLight` prop (setting it to `true`) the pagination dots swaps to a a light theme. By default they are dark.   |
|horizontal |`false`|`bool`| use to alternate between horizontal and vertical (just like you do with your list component)  |
|textStyle|`{}`|`style object`| global style object. Tread lightly it may overlay if you plan to use my default Light/Dark Themes |
|dotStyle|`{}`|`style object`| addition style to use for pagination dots |
|startDotStyle|`{}`|`style object`| addition style to use for start dots |
|endDotStyle`|`{}`|`style object`| addition style to use for end dots |



### Dot Icons

> this uses react-native-vector-icons [checkout here] (https://github.com/oblador/react-native-vector-icons)

#### Start/End Dots Only
| Prop  | Default  | Type | Description |
|------------------|------------------|------------------|------------------|
|`startDotIconName` (when `horizontal`)|`"chevron-left"`|`icon name`| Icon shown for dot at start of list |
|`startDotIconName` (when `vertical`)|`"chevron-up"`|`icon name`| Icon shown for dot at start of list |
|`endDotIconName` (when `horizontal`)|`"chevron-right"`|`icon name`| Icon shown for dot at start of list |
|`endDotIconName` (when `vertical` )|`"chevron-down"`|`icon name`| Icon shown for dot at start of list |
|`startDotIconSize` |`15`|`number`| end icon dot size|
|`endDotIconSize`|`15`|`number`| end icon dot size|
|`startDotIconFamily` / `endDotIconFamily`|`MaterialCommunityIcons`|`string` of font family name | Font Family for Icon. options: `Entypo`, `EvilIcons`, `FontAwesome`, `Foundation`, `Ionicons`, `MaterialIcons`, `MaterialCommunityIcons`, `Octicons`, `Zocial`, `SimpleLineIcons`  (available in react-native-vector-icons package)|

#### Pagination Dots Only
| Prop  | Default   | Type | Description |
|------------------|------------------|------------------|------------------|
  |`dotIconFamily`|`"MaterialCommunityIcons"`|`string` of font family name | Font Family for Icon. options: `Entypo`, `EvilIcons`, `FontAwesome`, `Foundation`, `Ionicons`, `MaterialIcons`, `MaterialCommunityIcons`, `Octicons`, `Zocial`, `SimpleLineIcons` (available in react-native-vector-icons package) |
  |dotIconNameEmpty|`"close"`|`icon name`| Icon Shown when pagination dot is Empty |
  |dotIconNameActive|`"checkbox-blank-circle"`|`icon name`| Icon Shown when pagination dot is Active|
  |dotIconNameNotActive|`"checkbox-blank-circle-outline"`|`icon name`| Icon Shown when pagination dot is Not Active|
 |dotIconSizeActive|`15`|`number`| size of pagination icon when active |
 |dotIconSizeNotActive|`10`|`number`| size of pagination iconwhen  vertical |
 |dotIconColorNotActive|`"rgba(0,0,0,.5)"`|`color`|dot Icon Font Size when on page but Not Active|
 |dotIconColorActive|`"rgba(0,0,0,.3)"`|`color`|dot Icon Font Size when on page but Not Active|
 |dotIconColorEmpty|`"rgba(0,0,0,.2)"`|`color`|dot Icon Font Size when on page but Not Active|

 **when using dotThemeLight**

 | Prop  | Default  | Type | Description |
 |------------------|------------------|------------------|------------------|
 |dotIconColorNotActive| `"rgba(255,255,255,.4)"`|`color`|dot Icon Font Size when on page but Not Active|
 |dotIconColorActive| `"rgba(255,255,255,.5)"`|`color`|dot Icon Font Size when on page but Not Active|
 |dotIconColorEmpty| `"rgba(255,255,255,.2)"`|`color`|dot Icon Font Size when on page but Not Active|



### Dot Text (Numbering Displayed)  
#### Start/End Dots Only

| Prop  | Default  | Type | Description |
|------------------|------------------|------------------|------------------|
|startDotFontSize|`11`|`number`|start Dot Font Size |
|endDotFontSize|`11`|`number`|end Dot Font Size |
#### Pagination Dots Only
| Prop  | Default  | Type | Description |
|------------------|------------------|------------------|------------------|
  |dotFontSizeActive|11|`number`|dot Text Font Size when Active on page |
  |dotFontSizeEmpty|11|`number`|dot Text Font Size when empty on page |
  |dotFontSizeNotActive|9|`number`|dot Text Font Size when on page but Not Active |
  |dotTextColorNotActive|`"rgba(0,0,0,.5)"`  |`color`|dot Text  Color when Not Active|
  |dotTextColorActive|`"rgba(0,0,0,.3)"`  |`color`| dot Text  Color when Active|
  |dotTextColorEmpty|`"rgba(0,0,0,.2)"` |`color`|dot Text Color when  Empty|

**when using dotThemeLight**

| Prop  | Default  | Type | Description |
|------------------|------------------|------------------|------------------|
  |dotTextColorNotActive| `"rgba(255,255,255,.4)"` |`color`|dot Text  Color when Not Active|
  |dotTextColorActive| `"rgba(255,255,255,.5)"` |`color`| dot Text  Color when Active|
  |dotTextColorEmpty| `"rgba(255,255,255,.2)"`|`color`|dot Text Color when  Empty|


#### Advanced Positioning
| Prop  | Default   | Type | Description |
|------------------|------------------|------------------|------------------|
  |`dotSwapAxis` (all pagination dots)/ `startDotSwapAxis` / `endDotSwapAxis`|false|`bool`|keeps the lists in the correct position (horizontal or vertical) by swaps how dots display |
  |`dotPositionIconBeforeText` (all pagination dots)/`startDotPositionIconBeforeText` / `endDotPositionIconBeforeText`|false|`bool`| Swaps the dots `flexDirection` default style property.  |

  Wanna move anything to the left, right, top, or bottom of something? Then use `dotSwapAxis` in combination until you find the right mix `startDotPositionIconBeforeText`.

#### Visibility
| Prop  | Default   | Type | Description |
|------------------|------------------|------------------|------------------|
|`dotIconHide` / `startDotIconHide` / `endDotIconHide` |false |`bool`| hide the dots icon |
|`dotIconHide` / `startDotIconHide` / `endDotIconHide` |false|`bool`| hide the dots icon |
|`dotTextHide` / `startDotTextHide` / `endDotTextHide` |false|`bool`| hide the dots text |
