/* @flow */

import React, { Component } from 'react';
import {View,Text,
  Dimensions,
  FlatList,
  Image,LayoutAnimation,TouchableOpacity,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import _ from 'lodash';
import PropTypes from 'prop-types';
import {MockRobotsList} from '../FakerMocks';
import Pagination from 'react-native-pagination';


const {width, height} = Dimensions.get('window');
let ITEM_HEIGHT=100



export default class HorizontalAdvancedFlatList extends Component {
constructor(props){
   super(props);
    this.state = {
      isLoading:false,
      activeId:null,
      activeItem:null,
      items:MockRobotsList,
    };


this.renderItem=this.renderItem.bind(this)
this.getFlatListItems=this.getFlatListItems.bind(this)
this.renderItem=this.renderItem.bind(this)
  }

getFlatListItems(){
  this.setState({isLoading:true})
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  setTimeout(function() {
      this.setState({isLoading:false,items:MockRobotsList})
    }.bind(this), 2000);
}



setItemAsActive(activeItem){
this.setState({scrollToItemRef:activeItem})
this.setState({activeId:activeItem.index, activeItem:activeItem.item})
}
   renderItem(o,i){
     return (<View style={{flex: 1,height,justifyContent: "center",alignItems: "center",}}>

       <TouchableOpacity onPress={()=>this.setItemAsActive(o)}
         style={[s.renderItem,
           (this.state.activeId===_.get(o,"item.id",false))?{backgroundColor:"#01a699"}:{backgroundColor:"#ff5b5f"},
         ]}>
       <Image resizeMode="center" style={s.image} source={{uri:`https://robohash.org/${o.item.name}?size=350x350&set=set1`}}/>
     <Text style={[s.name,
              (this.state.activeId===o.item.id)?{color:"#01a699"}:{color:"#ff5b5f"},
         ]}>
         {(o.item.name)?o.item.name:"no name attrabute"}</Text>
     </TouchableOpacity>
   </View>)

   }

clearList(){this.setState({items:[]})}
onEndReached(o){console.log(" reached end: ",o);}



onViewableItemsChanged = ({ viewableItems, }) => this.setState({viewableItems})


render() {

  const ListEmptyComponent=()=>{
    return (<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",}}>
              <TouchableOpacity onPress={()=>this.getFlatListItems()}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>Nothing is Here!</Text>
                <Text style={{color:'rgba(0,0,0,0.5)',fontSize: 15,textAlign: "center",}}>Try Again?</Text>
            </TouchableOpacity>
        </View>)
      }


      return (<View style={[s.container]}>
        <View style={s.innerContainer}>

        {!this.state.activeItem &&
            <View style={{justifyContent: 'center',alignItems: "center",flex: 1,}}>
                <Text style={{textAlignVertical: "center",color:"rgba(0,0,0,.4)", textAlign: "center",fontWeight:"400",fontSize: 15,}}>Make a Selection!</Text>
            </View>
        }

        {this.state.activeItem &&
          <TouchableOpacity onPress={()=>this.setItemAsActive(o)} style={[s.renderItem,s.activeItem]} >
            <Image resizeMode="center" style={s.image} source={{uri:`https://robohash.org/${_.get(this.state.activeItem,"name","default")}?size=350x350&set=set1`}}/>
          <Text style={[s.name,{color:"#fff"}]}>
            {_.get(this.state.activeItem,"name","No Default")}
          </Text>
          </TouchableOpacity>
        }

        <TouchableOpacity onPress={()=>this.clearList()} style={s.trashButton}>
          <Ionicons name={"ios-trash-outline"} size={25} color="rgba(0,0,0,0.5)"/>
      </TouchableOpacity>
    </View>



    <View style={{flex: 1,height,width}}>
      <FlatList ListEmptyComponent={ListEmptyComponent}
      //  initialNumToRender={5}
       horizontal ref={r=>this.refs=r}
       getItemLayout={(data, index) => ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index})}
       //onEndReached={this._onEndReached}
       onRefresh={(o)=>alert("onRefresh:",o)}
       initialScrollIndex={0}
       refreshing={this.state.isLoading}
        onEndReached={(o)=>this.onEndReached}
        keyExtractor={(o, i) => o.key}
        data={this.state.items}
      scrollRenderAheadDistance={width*2}
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
          // dotPositionSwap
          listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
          dotIconNameNotActive={"account-outline"}
          dotIconNameEmpty={"account-off"}
          dotIconNameActive={"account-settings"}
          dotTextHide
          dotIconSizeNotActive={20}
          dotIconSizeActive={27}
          dotIconSizeEmpty={27}
          //iconColorhasNotSeen={"red"}
          paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
          paginationItems={this.state.items}//pass the same list as data
          paginationItemPadSize={3}
        />
      </View>
    </View>)
  }
}


const s = StyleSheet.create({
container: {
  flex: 1,
  height,
  width,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF",
},
innerContainer:{flex: 1,height,width,justifyContent: "center",alignItems: "center",
backgroundColor: "#01a699",},
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
activeItem:{borderColor: 'rgba(255,255,255,1)',backgroundColor:"#f5fcff", shadowColor: 'rgba(255,255,255,1)'},
name:{
position:"absolute",
bottom:-34,left:0,right:0,
backgroundColor:"transparent",
fontSize: 12,
width:100,
textAlign: "center",
fontWeight:"600",

},
trashButton:{position:"absolute",backgroundColor:"#ff5b5f",right:0,bottom:0,margin:10,zIndex:3,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},
image:{
width: 96,
height: 96,
borderRadius: 48,
},
});
