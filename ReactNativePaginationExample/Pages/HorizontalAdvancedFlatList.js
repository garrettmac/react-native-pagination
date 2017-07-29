/* @flow */

import React, { Component } from 'react';
import {
View,
Text,
Dimensions,
FlatList,
SearchBar,
Image,
LayoutAnimation,
TouchableOpacity,
StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const {width, height} = Dimensions.get('window');
import _ from 'lodash';
import PropTypes from 'prop-types';

import {MockRobotsList} from '../FakerMocks';
import Pagination from '../react-native-pagination';



  let ITEM_HEIGHT=100



  export default class HorizontalAdvancedFlatList extends Component {
constructor(props){
   super(props);
    this.state = {
      isLoading:false,
      activeId:null,
      activeItem:null,
      // FlatListItems:[],
      FlatListItems:MockRobotsList,
    };

    // this.ListHeaderComponent=this.ListHeaderComponent.bind(this)
// this.ListFooterComponent=this.ListFooterComponent.bind(this)
this.ListEmptyComponent=this.ListEmptyComponent.bind(this)
this.renderItem=this.renderItem.bind(this)
this.getFlatListItems=this.getFlatListItems.bind(this)
this.scrollToEnd=this.scrollToEnd.bind(this)
this.scrollTo=this.scrollTo.bind(this)
this.renderItem=this.renderItem.bind(this)
  }


getFlatListItems(){
this.setState({isLoading:true})
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
setTimeout(function() {
this.setState({
  isLoading:false,
  // FlatListItems:[{"id":1,"name":"Bernie Sanders"},{"id":2,"name":"Al Frankin"},{"id":3,"name":"Elizabeth Warren"},{"id":4,"name":"Cory Booker"}]
  FlatListItems:MockRobotsList
})
}.bind(this), 2000);
}

ListEmptyComponent=()=>{return (<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",}}><TouchableOpacity onPress={()=>this.getFlatListItems()}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>Nothing is Here!</Text>
<Text style={{color:'rgba(0,0,0,0.5)',fontSize: 15,textAlign: "center",}}>Try Again?</Text>
</TouchableOpacity></View>)}



 ListFooterComponent = () => {
   // if (!this.state.isLoading) return null;
   if (!this.state.isLoading){
      return (<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",}}>
   <Loading type={"ThreeBounce"} color="white" isVisible={this.state.isLoading} />
   </View>);
   return (
     <View style={[s.container,]}>
       <ActivityIndicator hidesWhenStopped  size="large" />
     {/* <Loading type={"ThreeBounce"} color="white" isVisible={this.state.isLoading} /> */}
     </View>
   );
 }
 }
 onItemUpdate(item,attr="seen"){
   var data = _.map(this.state.data, function(q) {
  return q.id === item.id ? {...item, [attr]: item[attr]!==item[attr]} : q;
});
}
setItemAsActive(activeItem){
// console.log(" setItemAsActive: item ",activeItem);
this.setState({scrollToItemRef:activeItem})
this.setState({activeId:activeItem.index, activeItem:activeItem.item})
}
   renderItem(o,i){
     return (<View style={{flex: 1,height,justifyContent: "center",alignItems: "center",}}>

       <TouchableOpacity onPress={()=>this.setItemAsActive(o)}
         style={[
           s.renderItem,
           (this.state.activeId===_.get(o,"item.id",false))?{backgroundColor:"#01a699"}:{backgroundColor:"#ff5b5f"},
         ]}>
       <Image resizeMode="center" style={s.image} source={{uri:`https://robohash.org/${o.item.name}?size=350x350&set=set1`}}/>
     <Text style={[
              s.name,
              (this.state.activeId===o.item.id)?{color:"#01a699"}:{color:"#ff5b5f"},
         ]}>
         {(o.item.name)?o.item.name:"no name attrabute"}</Text>
     </TouchableOpacity>
   </View>)

   }

clearList(){this.setState({FlatListItems:[]})}
onEndReached(o){}




// scrolling
scrollTo(ref="FlatListRef",x=0,y=0){
try {this.refs[ref].scrollToItem(this.state.scrollToItemRef)} catch (e) {console.log(" e: ",e);}
}
scrollToStart(ref="FlatListRef",x=0,y=0){
try {this.refs[ref].scrollToOffset({x,y,amimated:true})} catch (e) {console.log(" e: ",e);}
}
scrollToEnd(ref="FlatListRef"){
try {this.refs[ref].scrollToEnd()} catch (e) {console.log(" e: ",e);}
}


onViewableItemsChanged = ({ viewableItems, changed }) => {
 //  console.warn(" viewableItems: ",viewableItems);
 this.setState({viewableItems,changed})
};


render() {
return (<View style={[s.container]}>
<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",
backgroundColor: "#01a699",}}>





        {!this.state.activeItem
            ?(
            <View style={{justifyContent: 'center',alignItems: "center",flex: 1,}}>
<Text style={{textAlignVertical: "center",color:"rgba(0,0,0,.4)", textAlign: "center",fontWeight:"400",fontSize: 15,}}>Make a Selection!</Text>
            </View>
            )
            : (<TouchableOpacity onPress={()=>this.setItemAsActive(o)} style={[s.renderItem,
              {borderColor: 'rgba(255,255,255,1)',backgroundColor:"#f5fcff", shadowColor: 'rgba(255,255,255,1)'}
                ]} onPress={()=>alert(JSON.stringify(this.state.activeItem))}>
              <Image resizeMode="center" style={s.image} source={{uri:`https://robohash.org/${_.get(this.state.activeItem,"name","default")}?size=350x350&set=set1`}}/>
            <Text style={[s.name,{color:"#fff"}]}>
{_.get(this.state.activeItem,"name","No Default")}

</Text>
            </TouchableOpacity>)
        }
<TouchableOpacity onPress={()=>this.clearList()}
    style={{position:"absolute",backgroundColor:"#ff5b5f",right:0,bottom:0,margin:10,zIndex:3,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
    <Ionicons name={"ios-trash-outline"} size={25} color="rgba(0,0,0,0.5)"/>

</TouchableOpacity>
</View>
<View style={{flex: 1,height,width}}>


<FlatList

  ref={"flatListRef"}
       ListEmptyComponent={this.ListEmptyComponent}
      //  initialNumToRender={5}
       horizontal
       getItemLayout={(data, index) => (
         {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
        )}
       //onEndReached={this._onEndReached}
       onRefresh={(o)=>alert("onRefresh:",o)}
       initialScrollIndex={0}
       refreshing={this.state.isLoading}
        onEndReached={(o)=>this.onEndReached}
        keyExtractor={(o, i) => o.key}
      data={this.state.FlatListItems}
      // dotSwapAxis
      // dotPositionIconBeforeText
      scrollRenderAheadDistance={width*2}
      //data={[{"id":1,"name":"Bernie Sanders"},{"id":2,"name":"Al Frankin"},{"id":3,"name":"Elizabeth Warren"},{"id":4,"name":"Cory Booker"}]}
      renderItem={this.renderItem}
      onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}

    />
    <TouchableOpacity onPress={()=>this.clearList()}
            style={{position:"absolute",backgroundColor:"ff5b5f",right:35,top:0,margin:10,zIndex:3,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
            <Ionicons name={"ios-refresh-outline"} size={25} color="rgba(0,0,0,0.5)"/>
    </TouchableOpacity>
  <TouchableOpacity onPress={()=>this.clearList()}
            style={{position:"absolute",backgroundColor:"ff5b5f",right:0,top:0,margin:10,zIndex:3,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
            <Ionicons name={"ios-trash-outline"} size={25} color="rgba(0,0,0,0.5)"/>
    </TouchableOpacity>



    <Pagination
    horizontal
    // debugMode
    // dotSwapAxis
    // dotPositionIconBeforeText
    listRef={this.refs.flatListRef}
 // containerStyle={{backgroundColor:"rgba(0,0,0,0)",width,position:"absolute", right:0,left:0,bottom:7,padding:0,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}}
onItemSelected={this.onItemUpdate.bind(this)}
visible={this.state.viewableItems}
changed={this.state.changed}
  data={this.state.FlatListItems}
// onPressForward={}
// onPressBack={}
startIndex={0}
offScreenIconName={"account-outline"}
placeholderIconName={"account-off"}
offScreenIconSize={27}
onScreenIconSize={20}
onScreenIconName={"account-settings"}
//iconColorhasNotSeen={"red"}
activeItemIndex={1}
padSize={3}
groupSize={8}
pageSize={6}
/>



  </View>
</View>)

}
}
{/* onPress={()=>this.scrollToStart("FlatListRef",0,0) */}
{/* onPress={()=>{if(this.refs.FlatListRef.scrollToEnd)this.refs.FlatListRef.scrollToEnd()}} */}
{/* onPress={()=>{if(this.refs.FlatListRef.scrollToIndex)this.refs.FlatListRef.scrollToIndex(4)}} */}

const s = StyleSheet.create({
container: {
  flex: 1,
  height,
  width,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF",
},
text:{
fontWeight:"600",
fontSize:100,
textAlignVertical: "center", textAlign: "center",
},
renderItem:{
width:ITEM_HEIGHT,
borderColor: 'rgba(0,0,0,.3)',shadowColor: 'rgba(0,0,0,.3)',
height:ITEM_HEIGHT,
margin:10,
justifyContent:"center",
alignItems:"center",
borderRadius:50,
borderWidth: 3,
shadowOffset: {
width: 3,
height: 3
},
shadowRadius: 6,
shadowOpacity: 0.8
},
name:{
position:"absolute",
bottom:-34,left:0,right:0,
backgroundColor:"transparent",
fontSize: 12,
width:100,
textAlign: "center",
fontWeight:"600",

},
image:{
width: 96,
height: 96,
borderRadius: 48,
},
});
