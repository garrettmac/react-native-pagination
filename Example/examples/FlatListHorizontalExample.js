/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import ListItems from './ListItems';
// import {getMoviesFromApi} from './ListItems';
export default class FlatListHorizontalExample extends Component {
  componentDidMount() {
    try {

   // do something with status
 } catch(e) {
   console.error(e);
 }
  }
  render() {
    let heading="heading",subheading="subheading"
    return (
      <View style={[s.container,s.containerMarginTop]}>

<FlatList style={{flex: 1,width,height,}}
       ListHeaderComponent={<View style={{padding: 10}}><Text style={{fontSize: 35,color: '#444',margin: 5,fontWeight: '700'}}>{(heading)?heading:"Heading"}</Text><View style={{width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 30}}/></View>}
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
      data={ListItems}
      renderItem={(o,i) =>
      <TouchableOpacity key={`flatlist-item-${i}`} onPress={()=>alert("pressed item")}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>{(o.name)?o.name:"no name attrabute"}</Text></TouchableOpacity>
      }/>

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
