/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';
import PropTypes from 'prop-types';
import {PersonList} from './ListItems';
import Pagination from '../Pagination';
// import {getMoviesFromApi} from './ListItems';



import ListItem from './widgets/ListItem';
export default class FlatListVerticalExample extends Component {


  state = {
    items: PersonList,
    selected: (new Map(): Map<string, boolean>)
  };

  _keyExtractor = (item, index) => item.key;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => {
    // console.log(" item: ",item);
  return (<ListItem
       index={item.id}
       id={item.key}
       onPressItem={this._onPressItem}
       selected={!!this.state.selected.get(item.id)}
       name={item.name}
       avatar={item.avatar}
       description={item.email}
       tag={item.group}
       createTagColor
     />)
 };
 _renderIteme = ({item, separators}) => {
   console.log(" item: ",item);
 return (
 <TouchableHighlight
   onPress={() => this._onPress(item)}
   onShowUnderlay={separators.highlight}
   onHideUnderlay={separators.unhighlight}>
   <View style={{backgroundColor: 'white'}}>
     <Text>{item.title}}</Text>
   </View>
 </TouchableHighlight>)
}
 _bindToState(){

 }
 onItemUpdate(item,attr="seen"){
   var data = _.map(this.state.data, function(q) {
  return q.id === item.id ? {...item, [attr]: item[attr]!==item[attr]} : q;
});
 this.setState({data})
  //  let itemToUpdate=this.state.data.filter(o => o.id === item.id)
  //  let itemToUpdate=
  //  itemToUpdate[attr]=!itemToUpdate[attr]

 }
 onViewableItemsChanged = ({ viewableItems, changed }) => {
   console.warn(" viewableItems: ",viewableItems);
  this.setState({viewableItems,changed})
};
  render() {
    let heading="Contacts",subheading="Friend List"
    let ListHeaderComponent=(<View style={[{padding: 10},s.containerMarginTop]}>
      <Text style={{fontSize: 35,color: '#444',margin: 5,fontWeight: '700'}}>{(heading)?heading:"Heading"}</Text>
      <Text style={{fontSize: 17,color: '#444',margin: 5,fontWeight: '400'}}>{subheading}</Text>
    <View style={{width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 30}}/>
    </View>)
    return (
      <View style={[s.container]}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
            // data={this.props.data}
            data={this.state.items}
            // extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}

          />



        <Pagination
          // horizontal
      // containerStyle={{backgroundColor:"red",width,position:"absolute", right:0,left:0,bottom:7,padding:10,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}}
      //textStyle={}
      // seenIconComponent={}
      // selectedIconComponent={}
      // untouchedIconComponent={}
      // selectedCustomAttr="has_seen"
      // bindToState={this.bindToState.bind(this)}
      // onPressIconComponent={}
      // initialPage={0}
      onItemSelected={this.onItemUpdate.bind(this)}
      visibleRows={this.state.viewableItems}
      changedRows={this.state.changed}
        data={this.props.data}
      // onPressForward={}
      // onPressBack={}
      startIndex={0}


      // endIndex={}
      groupSize={8}
      pageSize={6}
      totalCount={this.props.data.length}
      //startIndex={}
      //endIndex={}
    />

{/* <FlatList style={{flex: 1,width,height,}}
       ListFooterComponent={<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",}}><TouchableOpacity onPress={()=>alert("pressed empty list")}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>End Of List</Text></TouchableOpacity></View>}
       ListEmptyComponent={<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",}}><TouchableOpacity onPress={()=>alert("pressed empty list")}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>List Is Empty</Text></TouchableOpacity></View>}
       //horizontal
       //enableEmptySections
       //initialNumToRender={10}
       //onEndReached={this._onEndReached}
       //onRefresh={this._onRefresh}
       //scrollToEnd={this.scrollToEnd}
       //scrollToIndex={this.scrollToIndex}
       //scrollToItem={this.scrollToItem}
       //refreshing={false}
       //initialScrollIndex={_.chain(ARRAY).map("key").indexOf("value").value()}
       //initialScrollIndex={_.indexOf(ARRAY,_.find(ARRAY,(o)=>o.id===SOMEID}))}
      //  getItemLayout={(data, index) => (
      //    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
      //  )}
      data={PersonList}
      renderItem={this._renderItem}
      // renderItem={(o,i) =><TouchableOpacity key={`flatlist-item-${i}`} onPress={()=>alert("pressed item")}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>{(o.name)?o.name:"no name attrabute"}</Text></TouchableOpacity>}/>
/> */}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMarginTop: {
    marginTop: 30,
  },
});



FlatListVerticalExample.defaultProps = {
  data:PersonList
}
