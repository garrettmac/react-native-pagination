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
let showComments=false
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
/*Array.prototype.first = function () {
    return this[0]||{};
};
Array.prototype.last = function () {
    return this[this.length-1]
};
Array.prototype.nth = function (n) {
    return this[n]
};
Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};*/

export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items:props.data,
      data:[],
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

      if(!has_seen)name= this.props.offScreenIconName
      else name= this.props.onScreenIconName
      if(has_read)name= this.props.didActionIconName

      return name
  }
   Color = (item) => {

     if(this.props.iconColor)return this.props.iconColor
      let color=null;
      let hasSeen=_.get(item,"isViewable",false)
      // let isActive=this.props.activeItemIndex===_.get(item,"index",false)

      if(!hasSeen)color=this.props.onScreenIconColor
      else color=this.props.offScreenIconColor
      // if(isActive)color=this.props.activeItemIndexColor

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
};

scrollTo(ref="FlatListRef",x=0,y=0){
// console.log(" this.refs: ",this.refs[ref]);
console.log(" this.state.scrollToItemRef: ",this.state.scrollToItemRef);
// try {this.refs[ref].scrollToIndex({x:0,y:0,amimated:true})} catch (e) {console.log(" e: ",e);}
// try {this.refs[ref].scrollToIndex(1)} catch (e) {console.log(" e: ",e);}
try {this.props.listRef.scrollToItem(this.state.scrollToItemRef)} catch (e) {console.warn(" e: ",e);}
// try {this.refs[ref].scrollToOffset({x:0,y:1000,amimated:true})} catch (e) {console.log(" e: ",e);}
}


scrollToStart(ref="FlatListRef",x=0,y=0){
  console.log(" this.props.listRefs: ",this.props.listRefs);
try {this.props.listRef.scrollToOffset({x,y,amimated:true})} catch (e) {console.warn(" e: ",e);}
}
scrollToEnd(ref="FlatListRef"){
try {this.props.listRef.scrollToEnd()} catch (e) {console.warn(" e: ",e);}
}
componentWillMount() {
  // this.pagination()
}
componentWillReceiveProps() {}
  render() {
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
      paginationItems,
      visible,
      changed,
    arrayOfChanged,
    data,
    page,
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

  /*
  TODO/WIP add normal pagination (without scroll)

let maxsize=10
  _page = Math.abs(parseInt(page) || 1)

  //results to return
  _pageSize = parseInt(pageSize) || 10
//cannot go above 50
if(_pageSize > maxsize)_pageSize=maxsize

// limits payload size
let total= (data.length)
let lastPage= Math.ceil(total/_pageSize)

let start = (_page - 1) * _pageSize + 1
 let end = total

 if (_pageSize < total) {
   end = _pageSize * _page
   if (end > total) {
     end = total;
   }
 }
let µœ=_.slice(data,start-1,end)
let statusString=start + '-' + end + ' of ' + total + ' items'
//let s=`start:${start-1}-${end}\n\n`
console.log(statusString);

*/



 let aia=data.map(i=>i.id)
 let via=visible.map(i=>i.index)
 let cia=changed.map(i=>i.index)






let padSize=3
let fillIndexes=[..._.times(padSize,i=>Array.min(via)-(i+1)),..._.times(padSize,i=>Array.max(via)+(i+1))]
/*
same as
 let fillIndexes=[
   Array.min(via)-1,
   Array.min(via)-2,
   Array.min(via)-3,
   Array.max(via)+1,
   Array.max(via)+2,
   Array.max(via)+3,
 ]
*/

fillIndexes=fillIndexes.map((num,i) => {
  /*
  *   if number is less than 0 when dont want it in the render array.
  *  instead we want [-2,-1,0,1,2] to look like [0,1,2,3,4]
  *  this does the following:
  *  var arr = [-2,-1,0,1,2]
  *  var max = Array.max(arr) === 2 (largest in array)
  *  and (num*= -1) flips if negative. so -2 is now 2. now add this to the max
  *  and arr went from [-2,-1,0,1,2] to [4,-1,0,1,2] and so on.
  */
  if(num < 0)return Array.max(fillIndexes)+(num*= -1)
  else return num
})

//create new items
let fill=fillIndexes.map((i) => {
  return {index:_.get(data,`[${i}].id`),key:_.get(data,`[${i}].id`),item:data[i],isViewable:false}
})
// console.log(" visible: ",visible);
 let µœ=_.sortBy([...visible,...fill],'index')

 let vmin=Array.min(visible.map(i=>i.index))
 let vmax=Array.max(visible.map(i=>i.index))

 // let µœ=[data]//.move(0, 1)
  let pia=µœ.map(i=>i.id)

function showLog(){
    let f=`\n`
    let o=`\n`



    let x=`same (p,v):  ${_.intersection(pia,via)}\n`//only merge what they have in common
    let l=`visible:     ${via} |min: ${vmin},max: ${vmax}\n`
    let p=`page:        ${pia} \n`
    let pr=`µœ:        ${µœ} \n`
    let c=`changed:     ${cia} \n`
    let fi=`fill:     ${fill} \n`
    let a=`all:         ${aia} \n`
    console.log('\n\n'+s,f,o,x,pr,l,fi,p,c,a);

}
if(showComments)showLog()



 // this.setState({paginationItems:µœ})

// console.log(" horizontal: ",horizontal);
if(horizontal===true)PaginationContainerStyle={backgroundColor:"rgba(100,0,0,.5)",width,position:"absolute", right:0,left:0,bottom:7,padding:10,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}
else PaginationContainerStyle={backgroundColor:"blue",height,alignItems:"center", justifyContent: 'space-between', position:"absolute",top:0,margin:0,bottom:0,right:0,bottom:0,padding:0,flex:1,}
    return (
      <View style={[PaginationContainerStyle,containerStyle]}>
        <View style={{
          flex: 1,
          marginTop:(horizontal===true)?0:40,
          marginBottom:(horizontal===true)?0:40,
          marginLeft:(horizontal===true)?5:0,
          marginRight:(horizontal===true)?5:0,
          width:(horizontal===true)?width:40,
      flexDirection: (horizontal===true)?"row":"column",
      justifyContent: 'center',}}>


{this.renderPreviousTouchable()}
{/* {//this.pagination().map((o,i) => { */}
{µœ.map((o,i) => {
  // console.log(" o: ",o);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  console.log(" o: ",o);
  // console.log(" o: ",o.isViewable);
      // return (<View style={{flex:1}}
      //   key={o.key}>{o.item}</View>)
    return  (<TouchableOpacity key={i} onPress={()=>this.scrollToStart()}
     style={[dotStyle,{alignItems:'center',flexDirection:(horizontal===true)?"column":"row",}]}>
     <Text style={[{textAlign: "center",fontWeight:"600",fontSize:9,flexDirection:(horizontal===true)?"row":"column"},textStyle]}>  {_.isNumber(o.key)?o.key+1:o.key}</Text>
   <Icon name={(o.isViewable===false)?(o.index===undefined)?this.props.placeholderIconName:this.props.offScreenIconName:this.props.onScreenIconName} size={(o.isViewable===true)?this.props.offScreenIconSize:this.props.onScreenIconSize} color={this.Color(o)}/>
   {/* <Icon name={this.Name(o.name)} size={(o.isViewable===true)?30:20} color={this.Color(o.name)}/> */}



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
    const {dotStyle,backButtonStyle,textStyle,backComponent,horizontal,backwardStyle,changed} = this.props

     if(backComponent)return backComponent
     else return (<TouchableOpacity onPress={()=>this.scrollToStart()}  style={[dotStyle,backwardStyle,backButtonStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
          <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {(horizontal===false)?"↑":"←"}</Text>
        {/* <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {Array.min(changed)}</Text> */}
        </TouchableOpacity>)

  }
  renderNextTouchable(){
    const {dotStyle,data,textStyle,nextStyle,nextComponent,changed,horizontal} = this.props
    if(nextComponent)return this.props.nextComponent
    else return (<TouchableOpacity onPress={()=>this.scrollToEnd()}  style={[dotStyle,nextStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
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
textStyle:{color:"rgba(0,0,0,0.5)",textAlign: "center",},
dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:"center",alignItems:'center',},
// dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',},
nextStyle:{flex:1},
backwardStyle:{flex:1},
pageSize:10,
nextText:"→",
backText:"←",
// arrayOfVisable:[],
visible:[],
changed:[0],
data:[],
// arrayOfchangedRows:[],
totalCount             : 50,//array.length
horizontal             : false,
pageRangeDisplayed    : 10,
marginPagesDisplayed  : 0,//show end items
offScreenIconName:"checkbox-blank-circle-outline",
placeholderIconName:"close",
offScreenIconSize:20,
onScreenIconName:"checkbox-blank-circle",
onScreenIconSize:10,


offScreenIconColor:"rgba(0,0,0,.5)",
onScreenIconColor:"rgba(0,0,0,.3)",
onPressedIconColor:"rgba(0,189,110,.5)",
activeItemIndexColor:"rgba(activeItemIndex,166,153,.6)",
activeItemIndex:null,
// didActionIconName:"read",
}

Pagination.PropTypes={
  data:PropTypes.array,

}




/*

// TODO persistants

let arrayOfchangedRows= _.keys(changed.s1).map(i =>parseInt(i))
let arrayOfIndexesSeen= _.keys(visible.s1).map(i =>parseInt(i))
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
