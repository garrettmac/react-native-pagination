/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  Dimensions,TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types';

//helper functions
Number.prototype.between = function (min, max) {
    return this > min && this < max;
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.prototype.first = function () {
    return this[0]||{};
};
Array.prototype.last = function () {
    return this[this.length-1]
};
Array.prototype.nth = function (n) {
    return this[n]
};

export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items:props.data,
      activeGroup:[],
      nextProps:[],
      pageGroupIndex: props.initialPage ? props.initialPage :
                props.forcePage   ? props.forcePage :
                0
    };
  }
   Name = (item) => {


      let name=null;
      let has_seen=_.get(item,"user_has_seen",false)
      let has_read=_.get(item,"user_has_read",false)

      if(!has_seen)name= this.props.newIconName
      else name= this.props.defaultIconName
      if(has_read)name= this.props.didActionIconName

      return name
  }
   Color = (item) => {
     if(this.props.iconColor)return this.props.iconColor
      let color=null;
      let has_seen=_.get(item,"user_has_seen",false)
      let has_read=_.get(item,"user_has_read",false)

      if(!has_seen)color=this.props.iconColorhasSeen
      else color=this.props.iconColorhasNotSeen
      if(has_read)color=this.props.iconColorhasCompletedAction

      return color
  }
  onPressBack(){
if(this.props.onPressBack){
  this.props.onPressBack();
}else {
}
  }
  onPressForward(){
if(this.props.onPressForward){
  this.props.onPressForward();
}else {
}
  }

  isElementIndexActive(i) {
    // console.log(" visibleRows: ",this.props.visibleRows);
    // console.log("####  viewableItems #### ");
    // console.log(viewableItems.map((item) => item.key));
    // this.setState({viewableItems,changed})
    // console.log("#### changed #### ");
    // changed.map((item) => console.log(`[${item.key}] isViewable = ${item.isViewable}`));

    return _.includes(this.props.visibleRows.map((item) => item.key),i)
  }

  pagination = () => {
    const {iconFamily,data} = this.props

    let Icon=null
  if(iconFamily==="Entypo")Icon=Entypo
  else if(iconFamily==="EvilIcons")Icon=EvilIcons
  else if(iconFamily==="FontAwesome")Icon=FontAwesome
  else if(iconFamily==="Foundation")Icon=Foundation
  else if(iconFamily==="Ionicons")Icon=Ionicons
  else if(iconFamily==="SimpleLineIcons")Icon=SimpleLineIcons
  else if(iconFamily==="MaterialIcons")Icon=MaterialIcons
  else if(iconFamily==="MaterialCommunityIcons")Icon=MaterialCommunityIcons
  else if(iconFamily==="Octicons")Icon=Octicons
  else if(iconFamily==="Zocial")Icon=Zocial
  else Icon=MaterialCommunityIcons

  // let items = {};
  let _items = [];

let totalPages
if(this.props.totalCount&&this.props.pageSize)totalPages=Math.round(this.props.totalCount/this.props.pageSize)
else totalPages=this.props.data.length/this.props.pageSize
//   if (totalPages <= this.props.pageRangeDisplayed) {
// console.log(`1) totalPages (${totalPages})<= this.props.pageRangeDisplayed (${this.props.pageRangeDisplayed})?`,totalPages <= this.props.pageRangeDisplayed);
//     for (let i = 0; i < totalPages; i++) {
//       // items['key' + i] = this.getPageElement(i);
//       _items.push({item:this.props.data[i],key:i})
//     }
// console.log("1) items: ",_items);
//   } else {
//     console.log(`2) totalPages (${totalPages}) <= this.props.pageRangeDisplayed (${this.props.pageRangeDisplayed}) IS FALSE`)
// //initalInex The initial page pageGroupIndex.
//     let leftSide  = (this.props.pageRangeDisplayed / 2);
//     let rightSide = (this.props.pageRangeDisplayed - leftSide);
// console.log("2A) leftSide: ",leftSide);
// console.log("2A) rightSide: ",rightSide);
//     if (this.state.pageGroupIndex > totalPages - this.props.pageRangeDisplayed / 2) {
//       rightSide = totalPages - this.state.pageGroupIndex;
//       leftSide  = this.props.pageRangeDisplayed - rightSide;
//       console.log("2B) leftSide: ",leftSide);
//       console.log("2B) rightSide: ",rightSide);
//     }
//     else if (this.state.pageGroupIndex < this.props.pageRangeDisplayed / 2) {
//       leftSide  = this.state.pageGroupIndex;
//       rightSide = this.props.pageRangeDisplayed - leftSide;
//       console.log("2C) leftSide: ",leftSide);
//       console.log("2C) rightSide: ",rightSide);
//     }

    let lastItem=this.props.data.last()
  console.log(" lastItem: ",lastItem);
    // for (i = 0; i < totalPages; i++) {
    console.log("watch: totalPages: ",totalPages);
    console.log("watch: this.props.pageSize: ",this.props.pageSize);
    // visibleRows
// changedRows
// let changed=_.includes(this.props.changedRows.map((item) => item.key),i)
// let visable=_.includes(this.props.visibleRows.map((item) => item.key),i)
// console.log("watch: visable: ",visable);
console.log("watch: visable: ",this.props.visibleRows);
// console.log("watch: changed: ",changed);
let numberLeftToPadWith=this.props.pageSize-this.props.visibleRows.length
console.log("watch: numberLeftToPadWith: ",numberLeftToPadWith);
console.log("watch: changed: ",this.props.changedRows);
    // if(this.props.totalCount&&this.props.pageSize)totalPages=Math.round(this.props.totalCount/this.props.pageSize)

//highest in active
let highestActiveItem=_.maxBy(this.props.visibleRows, 'key')
let lowestActiveItem=_.minBy(this.props.visibleRows, 'key')
console.log(" highestActiveItem: ",highestActiveItem);

let lowestPossableIndex=_.get(lowestActiveItem, "key")
let highestPossableIndex=_.get(highestActiveItem, "key")
// console.log(" lowestPossableIndex: ",lowestPossableIndex);
// console.log(" highestPossableIndex: ",highestPossableIndex);

let paddingItems=[]
lowestPossableIndex-=1
highestPossableIndex+=1

_.times(numberLeftToPadWith,(i)=>{
let even=i % 2 === 0;
// console.log("YYYY even: ",even);
// console.log("YYYY lowestPossableIndex: ",lowestPossableIndex);
// console.log("YYYY highestPossableIndex: ",highestPossableIndex);
// if((even===true)&&lowestPossableIndex&&highestPossableIndex){
if (even) {
console.log(`even: lowest possable - ${lowestPossableIndex}`);
let highestAvalibleItem=_.filter(this.props.data,{"index":highestPossableIndex})
let lowestAvalibleItem=_.filter(this.props.data,{"index":lowestPossableIndex})
console.log(" highestAvalibleItem: ",highestAvalibleItem);
if(lowestAvalibleItem){
  console.log("EVEN ADDING lowestAvalibleItem: ",lowestAvalibleItem);
  //return next lowest item
  lowestPossableIndex-=1
  paddingItems=[...lowestAvalibleItem,...paddingItems]
}else{
  console.log("EVEN ADDING highestAvalibleItem: ",highestAvalibleItem);
  //return next highest item
  highestPossableIndex+=1
  paddingItems=[...highestAvalibleItem,...paddingItems]
}


// }else if((even===false)&&highestPossableIndex&&lowestPossableIndex){
}else {
  // console.log(`odd: lowest possable - ${lowestPossableIndex}`);
  console.log(`odd: highest possable - ${highestPossableIndex}`);
let highestAvalibleItem=_.filter(this.props.data,{"index":highestPossableIndex})
let lowestAvalibleItem=_.filter(this.props.data,{"index":lowestPossableIndex})
console.log(" highestAvalibleItem: ",highestAvalibleItem);
if(highestAvalibleItem){
  //return next highest item
   highestPossableIndex+=1
   console.log("ODD ADDING highestAvalibleItem: ",highestAvalibleItem);

   paddingItems=[...highestAvalibleItem,...paddingItems]
}else{
  //return next lowest item
  lowestPossableIndex-=1
  console.log("ODD ADDING lowestAvalibleItem: ",lowestAvalibleItem);

  paddingItems=[...lowestAvalibleItem,...paddingItems]
}
}
// console.log(" paddingItems: ",paddingItems);

})
console.log("iiiii paddingItems: ",paddingItems);
console.log("iiiii this.props.visibleRows: ",this.props.visibleRows);
let items= _.sortBy([...this.props.visibleRows, ...paddingItems], ['index'])
console.log(" items: ",items);
// let items= _.times(this.props.pageSize,(i)=>{
//
//       // page = i + 1;
//
//       // if (page <= this.props.marginPagesDisplayed) {
//       // if (page > totalPages - this.props.marginPagesDisplayed) {
//         // if ((i >= this.state.pageGroupIndex - leftSide) && (i <= this.state.pageGroupIndex + rightSide)) {
//         // let breakLabelKey   = keys[keys.length - 1];
//         // if (this.props.breakLabel && breakLabelValue !== breakView) {
// return {item:this.props.data[i],key:i,isViewable:true}
//
//
//     })
this.setState({items})
      // return items



};

  // console.log(" nextProps: ",nextProps);
  // if(nextProps!==this.state.nextProps)//this.pagination()
  // this.setState({nextProps})
  // if(nextProps.changedRows!==prevProps.changedRows)//this.pagination()
  //this.pagination()

componentWillMount() {
  //this.pagination()

}
componentWillReceiveProps() {
  let activeGroup=[]
  // if(_.isArray(pages[indexOfHighestActiveIndex]))activeGroup=pages[indexOfHighestActiveIndex]
  // console.log(" activeGroup: ",activeGroup);
  // //active group v2
  // console.log(" Array.min(arrayOfchangedRows): ",Array.min(arrayOfchangedRows));
  // console.log(" last): ",last);
  let ACTIVE=this.props.visibleRows.map((item) => {
  return _.defaultsDeep(item.item,{isViewable:item.isViewable})
})
let highestActiveItem=_.maxBy(this.props.visibleRows, 'key')
let lowestActiveItem=_.minBy(this.props.visibleRows, 'key')

let min=_.get(lowestActiveItem, "key",0)-4

let max=_.get(highestActiveItem, "key",0)+4
console.log("99999 min: ",min);
console.log("99999 max: ",max);
  // let min=Array.min(ACTIVE)-2
  // let max=Array.max(ACTIVE)+2
  if(min<0)min=0
  if(max<ACTIVE.length)max=ACTIVE.length

console.log(" this.props.visibleRows: ",this.props.visibleRows);
   let kkkeys=_.values(this.props.visibleRows).map(i =>i.key)
   console.log(" kkkeys: ",kkkeys);
let dddd=this.props.data.map((item) => {
   console.log(" item: ",item);
  console.log(" _.includes(kkkeys,{key:item.key}): ",_.includes(kkkeys,item.key));
if(_.includes(kkkeys,item.key)){
return _.defaultsDeep({isViewable:true},item)
 }else{
 return _.defaultsDeep({isViewable:false},item)
}
})
  console.log(" dddd: ",dddd);
  // arrayOfchangedRows
  // arrayOfIndexesSeen
  // if(max>arrayOfIndexesSeen.length){
  //   max-1
  // }
  // if(max>arrayOfIndexesSeen.length){
  //   max-1
  // }
  // activeGroup=[...this.props.data,...ACTIVE].slice(min,max);
  activeGroup=dddd.slice(min,max);
  if(this.state.activeGroup!==activeGroup)this.setState({activeGroup})
  console.log("99999 ACTIVE: ",ACTIVE);
console.log("99999 activeGroup: ",activeGroup);

}
  render() {

    // if(nextProps!==this.state.nextProps)//this.pagination()





    const {
      pageSize,
      onPressBack,
      onPressForward,
      iconFamily,
      textStyle,
      containerStyle,
      nextButtonStyle,
      backButtonStyle,
      backwardStyle,
      dotStyle,
      backText,
      backStyle,
      nextText,
      nextStyle,

      visibleRows,
      changedRows,
    arrayOfChanged,
    data,
    horizontal,
    } = this.props
    let Icon=null
  if(iconFamily==="Entypo")Icon=Entypo
  else if(iconFamily==="EvilIcons")Icon=EvilIcons
  else if(iconFamily==="FontAwesome")Icon=FontAwesome
  else if(iconFamily==="Foundation")Icon=Foundation
  else if(iconFamily==="Ionicons")Icon=Ionicons
  else if(iconFamily==="SimpleLineIcons")Icon=SimpleLineIcons
  else if(iconFamily==="MaterialIcons")Icon=MaterialIcons
  else if(iconFamily==="MaterialCommunityIcons")Icon=MaterialCommunityIcons
  else if(iconFamily==="Octicons")Icon=Octicons
  else if(iconFamily==="Zocial")Icon=Zocial
  else Icon=MaterialCommunityIcons

let paginationItems=data
let PaginationContainerStyle=null;
console.log(" horizontal: ",horizontal);
if(horizontal===true)PaginationContainerStyle={backgroundColor:"red",width,position:"absolute", right:0,left:0,bottom:7,padding:10,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}
else PaginationContainerStyle={backgroundColor:"blue",height,alignItems:"center", justifyContent: 'space-between', position:"absolute",top:0,margin:0,bottom:0,right:0,bottom:0,padding:0,flex:1,}
    return (
      <View style={[PaginationContainerStyle,containerStyle]}>
        <View style={{
          flex: 1,
          marginTop:(horizontal===true)?0:40,
          marginBottom:(horizontal===true)?0:40,
          marginLeft:(horizontal===true)?40:0,
          marginRight:(horizontal===true)?40:0,
          width:(horizontal===true)?width:40,
      flexDirection: (horizontal===true)?"row":"column",
      justifyContent: 'center',}}>


{this.renderPreviousTouchable()}
{/* {//this.pagination().map((o,i) => { */}
{this.state.activeGroup.map((o,i) => {
  // console.log(" o: ",o);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  // console.log(" o.item: ",o.item);
  console.log(" o: ",o.isViewable);
      // return (<View style={{flex:1}}
      //   key={o.key}>{o.item}</View>)
    return  (<TouchableOpacity key={i} onPress={()=>{alert(`pressed ${i}`)}}
     style={[dotStyle,{alignItems:'center',flexDirection:(horizontal===true)?"column":"row",}]}>
     <Text style={[{textAlign: "center",fontWeight:"600",fontSize:9,flexDirection:(horizontal===true)?"row":"column"},textStyle]}>  {o.key}</Text>
   <Icon name={this.Name(o.name)} size={(o.isViewable===true)?30:20} color={this.Color(o.name)}/>


</TouchableOpacity>)
    })}


{this.renderNextTouchable()}


</View>
</View>
    );
  }
  onPressForward(o){
    if(this.props.onPressForward)this.props.onPressForward(o)
  }
  renderPreviousTouchable(){
    const {dotStyle,backButtonStyle,textStyle,backComponent,horizontal,backwardStyle,changedRows} = this.props

     if(backComponent)return backComponent
     else return (<TouchableOpacity onPress={this.onPressForward.bind(this)}  style={[dotStyle,backwardStyle,backButtonStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
          <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {(horizontal===false)?"↑":"←"}</Text>
        {/* <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {Array.min(changedRows)}</Text> */}
        </TouchableOpacity>)

  }
  renderNextTouchable(){
    const {dotStyle,data,textStyle,nextStyle,nextComponent,changedRows,horizontal} = this.props

  if(nextComponent)return this.props.nextComponent
  else return (<TouchableOpacity onPress={this.props.onPressBack}  style={[dotStyle,nextStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
         {/* <Text style={[{textAlign:'center',flexDirection:(horizontal===false)?"row":"column"},textStyle]}> {(data.length-Array.min(changedRows))+1}</Text> */}
       <Text style={[{textAlign:'center',flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {(horizontal===false)?"↓":"→"}</Text>
       </TouchableOpacity>)




}
  }


const s = StyleSheet.create({
  container: {

  },
});

Pagination.defaultProps={
  iconFamily:"MaterialCommunityIcons",
// containerStyle:{flex: 1,backgroundColor:"red",width,height:null},
containerStyle:null,
// textStyle:{fontSize: 10,width:50,color:"white",textAlign: "center",},
textStyle:{color:"white",textAlign: "center",},
dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:"center",alignItems:'center',},
// dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',},
nextStyle:{flex:1},
backwardStyle:{flex:1},
pageSize:10,
nextText:"→",
backText:"←",
// arrayOfVisable:[],
visibleRows:[],
changedRows:[0],
data:[],
// arrayOfchangedRows:[],
totalCount             : 50,//array.length
horizontal             : false,
pageRangeDisplayed    : 10,
marginPagesDisplayed  : 0,//show end items
newIconName:"new-box",
defaultIconName:"newspaper",
didActionIconName:"read",
iconColorhasSeen:"rgba(255,255,255,1)",
iconColorhasNotSeen:"rgba(0,0,0,.5)",
iconColorhasCompletedAction:"rgba(0,189,110,.5)",


}

Pagination.PropTypes={
  data:PropTypes.array,

}




/*
let arrayOfchangedRows= _.keys(changedRows.s1).map(i =>parseInt(i))
let arrayOfIndexesSeen= _.keys(visibleRows.s1).map(i =>parseInt(i))
//console.log(" arrayOfIndexesSeen: ",arrayOfIndexesSeen);

let {0: firstchanged, [arrayOfIndexesSeen.length]: lastchanged} = arrayOfchangedRows;
let {0: firstseen, [arrayOfIndexesSeen.length]: lastseen} = arrayOfIndexesSeen;
this.props.store.NewsActions.ArticleActiveRangeStart=firstseen
this.props.store.NewsActions.ArticleActiveRangeEnd=lastseen
//console.log(" lastseen: ",Array.max(arrayOfIndexesSeen)+1);
this.setState({ArticleActiveRangeStart:this.props.store.NewsActions.ArticleActiveRangeStart})
this.setState({ArticleActiveRangeEnd:this.props.store.NewsActions.ArticleActiveRangeEnd})
if(this.props.store.NewsActions.HotArticles[0])this.props.store.NewsActions.HotArticles[0]["icon_color"]="rgba(0,0,0,.4)"
arrayOfchangedRows.map((i) => {
 if(i&&this.props.store.NewsActions.HotArticles[i]){
   this.props.store.NewsActions.HotArticles[i]["icon_color"]="rgba(0,0,0,.4)"
   if(this.props.store.NewsActions.HotArticles[0]){
     this.props.store.NewsActions.HotArticles[0]["user_has_seen"]=true
     this.props.store.NewsActions.HotArticles[0]["icon_color"]="rgba(0,0,0,.4)"
   }
 }
})
//  if(_.has(this.props.store.NewsActions.HotArticles[Array.max(arrayOfIndexesSeen)+1]))
//  this.props.store.NewsActions.HotArticles[Array.max(arrayOfIndexesSeen)+1]["user_has_seen"]=true
//  if(_.has(this.props.store.NewsActions.HotArticles[Array.min(arrayOfIndexesSeen)-1]))
//  this.props.store.NewsActions.HotArticles[Array.min(arrayOfIndexesSeen)-1]["user_has_seen"]=true

arrayOfIndexesSeen.map((i) => {
 if(i&&this.props.store.NewsActions.HotArticles[i]){
   this.props.store.NewsActions.HotArticles[i]["user_has_seen"]=true
   this.props.store.NewsActions.HotArticles[i]["icon_color"]="white"
   if(this.props.store.NewsActions.HotArticles[0]){
     this.props.store.NewsActions.HotArticles[0]["user_has_seen"]=true
     this.props.store.NewsActions.HotArticles[0]["icon_color"]="white"
   }
 }
})
//  this.setState({arrayOfIndexesSeen,arrayOfchangedRows})
this.props.store.NewsActions.arrayOfIndexesSeen=arrayOfIndexesSeen
this.props.store.NewsActions.arrayOfchangedRows=arrayOfchangedRows
// this.props.store.NewsActions.HotArticles.slice()[]
*/
