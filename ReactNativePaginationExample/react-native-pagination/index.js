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


import Icon from './components/Icon';
import Dot from './components/Dot';
const {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types';

//helper functions

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
  console.log("this.props.listRefs: ",this.props.listRefs);
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
      totalDots,
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
      padSize,
      visible,
      changed,
    arrayOfChanged,
    data,
    page,
    horizontal,
startDotStyle,
    DotComponent,
renderDotComponent,
    endDotStyle,
    paginationStyle,
    } = this.props


  /*
  TODO/WIP add normal pagination (without scroll)

let maxsize=10
  _page = Math.abs(parseInt(page) || 1)

  //results to return
  _pageSize = parseInt(totalDots) || 10
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
let ALL_DOTS=_.slice(data,start-1,end)
let statusString=start + '-' + end + ' of ' + total + ' items'
//let s=`start:${start-1}-${end}\n\n`
console.log(statusString);

*/



 let ALL_DATA_INDEXES=data.map(i=>i.index)
 let ACTIVE_DOTS_INDEXES=visible.map(i=>i.index)
 let cia=changed.map(i=>i.index)



// console.log(" visible: ",visible);

// console.log(" padSize: ",padSize);

let fillIndexes=[..._.times(padSize,i=>Array.min(ACTIVE_DOTS_INDEXES)-(i+1)),..._.times(padSize,i=>Array.max(ACTIVE_DOTS_INDEXES)+(i+1))]
// console.log(" fillIndexes: ",fillIndexes);
/*
same as
 let fillIndexes=[
   Array.min(ACTIVE_DOTS_INDEXES)-1,
   Array.min(ACTIVE_DOTS_INDEXES)-2,
   Array.min(ACTIVE_DOTS_INDEXES)-3,
   Array.max(ACTIVE_DOTS_INDEXES)+1,
   Array.max(ACTIVE_DOTS_INDEXES)+2,
   Array.max(ACTIVE_DOTS_INDEXES)+3,
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
// console.log(" fillIndexes: ",fillIndexes);
//create new items
let fill=fillIndexes.map((o,i) => {
// console.log("fillIndexes: data: ",data);
  return {index:_.get(data,`[${o}].index`,i),key:_.get(data,`[${o}].key`),item:_.get(data,`[${o}]`,{}),isViewable:false}
})
// console.log(" fill: ",fill);
// console.log(" fillIndexes: ",fill);
// console.log(" visible: ",visible);
 let ALL_DOTS=_.sortBy([...visible,...fill],'index')

 let vmin=Array.min(visible.map(i=>i.index))
 let vmax=Array.max(visible.map(i=>i.index))

 // let ALL_DOTS=[data]//.move(0, 1)
  let pia=ALL_DOTS.map(i=>i.id)

function showLog(){
    let f=`\n`
    let o=`\n`
// Naming Convention: X Array Indexs ([x]ai)
let ALL_DOTS_BY_INDEX=ALL_DOTS.map(i=>i.index)
let NOT_ACTIVE_DOTS_INDEXES=_.sortBy(fill.map(i=>i.index))
let ALL_DOTS_INDEXES=ALL_DOTS.map(i=>i.isViewable)


    let ___=`%c __________________________________________\n`
    let ADBY=`%c all visiblerrr dots:              ${ALL_DOTS_BY_INDEX} \n`
    let ADI=`%c active visible dots:           ${ACTIVE_DOTS_INDEXES} \n`
    let ANDI=`%c not active dots: (padding):    ${NOT_ACTIVE_DOTS_INDEXES} \n`

    let ADI_ISVIEWABLE=`%c each "visible dots" "isViewable" attribute:\n                      ${ALL_DOTS_INDEXES} \n`
    let AID=`%c all "data"'s':       ${ALL_DATA_INDEXES} \n`

    console.log('\n\n%cGarrett Mac\'s React Native Pagination'+"%c \ndebugMode: ON\n"+___+ADBY+ADI+ANDI+___+ADI_ISVIEWABLE+___+AID, 'color: #01a699','color: #f99137','color: #f99137','color: #a94920','color: #00a7f8','color: #3b539a','color: #32db64','color: #00c59e','color: #3b539a','color: #488aff');
    // console.log('\n\n%c Garrett Mac\'s React Native Pagination\n'+);


}
if(this.props.debugMode)showLog()



 // this.setState({paginationItems:ALL_DOTS})

// console.log(" horizontal: ",horizontal);
// let horizontalStyle={width,position:"absolute", right:0,left:0,bottom:5,padding:5,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}
let verticalStyle={height,alignItems:"center", justifyContent: 'space-between', position:"absolute",top:0,margin:0,bottom:0,right:0,bottom:0,padding:0,flex:1,}
let horizontalStyle={width,alignItems:"center", justifyContent: 'space-between', position:"absolute",margin:0,bottom:10,left:0,right:0,padding:0,flex:1,}

if(horizontal===true)PaginationContainerStyle=horizontalStyle
else if(paginationStyle)PaginationContainerStyle=paginationStyle
else PaginationContainerStyle=verticalStyle
PaginationContainerStyle

    return (
      <View style={[PaginationContainerStyle,containerStyle]}>
        <View style={[{
          flex: 1,
          marginTop:(horizontal===true)?0:40,
          marginBottom:(horizontal===true)?0:40,
          marginLeft:(horizontal===true)?5:0,
          marginRight:(horizontal===true)?5:0,
          width:(horizontal===true)?width:40,
      flexDirection: (horizontal==true)?"row":"column",
      justifyContent: 'center',}]}>



    <Dot StartDot {...this.props} onPress={this.onStartDotPress} styles={[dotStyle,startDotStyle]}/>

{ALL_DOTS.map((item,i) => {
  // console.log(" o: ",o);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)


  //Dot wont pass param "isViewable" so rename it.
  // item.canSee=item.isViewable
      return (<View style={{flex:1}} key={i}>
            {!DotComponent &&
                <Dot {...this.props} item={item} key={`paginationDot${i}`}/>
            }
            {DotComponent &&
                <DotComponent {...this.props} key={`paginationDot${i}`}/>
            }
            </View>)

      // if (DotComponent) {
        // return
      // }else {

      // }

    })}



    <Dot EndDot  {...this.props} onPress={this.onEndDotPress} styles={[dotStyle,endDotStyle]}/>

</View>
</View>
    );
  }
  onEndDotPress(){}
  onStartDotPress(){}
  onDotPress(){}
  onPressForward(o){
    if(this.props.onPressForward)this.props.onPressForward(o)
  }
  renderPreviousTouchable(){
    const {dotStyle,backButtonStyle,textStyle,backComponent,horizontal,backwardStyle,changed} = this.props

     if(backComponent)return backComponent
     else return (<TouchableOpacity onPress={()=>this.scrollToStart()}  style={[dotStyle,backwardStyle,backButtonStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
          <Text style={[{textAlign:"center",flexDirection:(horizontal==false)?"row":"column"},textStyle]}>  {(horizontal===false)?"↑":"←"}</Text>
        {/* <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {Array.min(changed)}</Text> */}
        </TouchableOpacity>)

  }

  }


const s = StyleSheet.create({
  container: {

  },
});

Pagination.defaultProps={

// containerStyle:{flex: 1,backgroundColor:"red",width,height:null},
containerStyle:null,
// textStyle:{color:"rgba(0,0,0,0.5)",textAlign: "center",},
startDotStyle:{},
endDotStyle:{},
dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:"center",alignItems:'center',},
nextStyle:{flex:1},
backwardStyle:{flex:1},
totalDots:10,
// arrayOfVisable:[],
visible:[],
changed:[],
data:[],
// arrayOfchangedRows:[],
totalCount             : 50,//array.length
horizontal             : false,
pageRangeDisplayed    : 10,



activeItemIndex:null,
hideEmptyDotComponents:false,
padSize:3,
// didActionIconName:"read",
}

Pagination.PropTypes={
  data:PropTypes.array,
  changed:PropTypes.array,

}
