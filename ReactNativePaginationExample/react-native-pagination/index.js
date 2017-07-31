/**
   * Assign the project to a list of employees.
   * @author garrettmac <garrett@vyga.io> (http://vyga.io)
   * @version 1.0.4
   * @module ReactNativePagination (https://github.com/garrettmac/react-native-pagination)
 */


import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  Dimensions,TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
_.mixin({compactObject: (o)=> {return _.each(o, (v, k)=> {if(!v) delete o[k];});}});

import Icon from './components/Icon';
import Dot from './components/Dot';
const {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types';

//helper functions


export default class Pagination extends Component {


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
try {this.props.listRef.scrollToOffset({x:0,y:0,amimated:true})} catch (e) {console.warn(" e: ",e);}
}
scrollToEnd(ref="FlatListRef"){
try {this.props.listRef.scrollToEnd()} catch (e) {console.warn(" e: ",e);}
}


componentWillMount() {
  // this.pagination()
}


/**
same as
let paginationVisibleItems=[
  _.min(paginationVisibleItemsIndexList)-1,
  _.min(paginationVisibleItemsIndexList)-2,
  _.min(paginationVisibleItemsIndexList)-3,
  _.max(paginationVisibleItemsIndexList)+1,
  _.max(paginationVisibleItemsIndexList)+2,
  _.max(paginationVisibleItemsIndexList)+3,
]
   * @method _createPaginationVisableItemsIndexArray
   * @param  {Object[]} employees - The employees who are responsible for the project.
   * @param {string} employees[].name - The name of an employee.
   * @param {string} employees[].department - The department of an employee.
   * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
   * @param {requestCallback} callback - The callback that handles the response.
   * @return {bool} some bool
 */
//sould look something like [0, -1, -2, 2, 3, 4] if [0,1] are viewable and paginationItemPadSize is 3

_createPaginationVisableItemsIndexArray(paginationVisibleItems,paginationVisibleItemsIndexList, paginationItemPadSize){
// let paginationVisibleItemsIndexList =paginationVisibleItems.map((item) =>item.id)
let preIniquePaddedIndexList=[..._.times(paginationItemPadSize,i=>_.min(paginationVisibleItemsIndexList)-(i+1)),..._.times(paginationItemPadSize,i=>_.max(paginationVisibleItemsIndexList)+(i+1))]
let uniquePaddedIndexList= preIniquePaddedIndexList.map((num,i) => {
   /*
   *   if number is less than 0 when dont want it in the render array.
   *  instead we want [-2,-1,0,1,2] to look like [0,1,2,3,4]
   *  this does the following:
   *  var arr = [-2,-1,0,1,2]
   *  var max = _.max(arr) === 2 (largest in array)
   *  and (num*= -1) flips if negative. so -2 is now 2. now add this to the max
   *  and arr went from [-2,-1,0,1,2] to [4,-1,0,1,2] and so on.
   */
   if(num < 0)return _.max(paginationVisibleItemsIndexList)+(num*= -1)
   else return num
  })
  // console.log(" uniquePaddedIndexList: ",uniquePaddedIndexList);
  return _.uniq(uniquePaddedIndexList)

}







componentWillReceiveProps() {}
  render() {
    let {
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
      paginationItemPadSize,
      paginationVisibleItems,
    paginationItems,
    page,
    mapWithItemProperty,
    horizontal,
startDotStyle,
    DotComponent,
renderDotComponent,
    endDotStyle,
    debugMode,
dotAnimation,
keyExtractor,
    paginationStyle,
    reactNativeListComponentType,
    pagingEnabled,

    showStartingJumpDot,
    showEndingJumpDot,
    endingJumpSize,
    startingJumpSize,
    hideEmptyDots,
    } = this.props



if(!mapWithItemProperty)mapWithItemProperty="index"
if(!reactNativeListComponentType)reactNativeListComponentType="FlatList"
paginationItems=paginationItems.map((item,i) => {

  item.paginationIndexId=i
  item.paginationHasSeenItem=false
  item.paginationHasPressedItem=false
  item.paginationSelectedItem=false
  return item
})
console.log("Index: ",paginationVisibleItems);
// paginationVisibleItemsIndexList this list of index that you want to remove or you'll see two active icon buttons
 let paginationVisibleItemsIndexList=paginationVisibleItems.map(i=>i.index)
 // if(pagingEnabled)paginationVisibleItemsIndexList=[_.max(paginationVisibleItemsIndexList)]


 if(pagingEnabled){
   //fix issue where it says two visable list items are active when only one should be
   if(paginationVisibleItemsIndexList.length>1){
   paginationVisibleItems=paginationVisibleItems.map((o) => {
     if(o.index===_.min(paginationVisibleItemsIndexList)){return {index:_.get(o,`index`),key:_.get(o,`key`),item:_.get(o,`item`,{}),isViewable:false}}
    //  if(o.index===_.min(paginationVisibleItemsIndexList)){console.log(" o: ",o);return o}
     else return o
   })
  //  paginationVisibleItemsIndexList=[_.min(paginationVisibleItemsIndexList)]
  }
 }


 // _createPaginationVisableItemsIndexArray(paginationVisibleItems,paginationVisibleItemsIndexList, paginationItemPadSize){
// ver aa=[_.max(paginationVisibleItemsIndexList)]
// paginationVisibleItemsIndexList
 let paginationVisableItemsIndexArray=this._createPaginationVisableItemsIndexArray(paginationVisibleItems,paginationVisibleItemsIndexList,paginationItemPadSize)
// console.log(" _createPaginationVisableItemsIndexArray:output ",paginationVisibleItems);
console.log(" paginationVisableItemsIndexArray: ",paginationVisableItemsIndexArray);

let paginationVisiblePadItems= paginationVisableItemsIndexArray.map((o,i) => {
   return {index:_.get(paginationItems,`[${o}].paginationIndexId`),key:_.get(paginationItems,`[${o}].paginationIndexId`),item:_.get(paginationItems,`[${o}]`,{}),isViewable:false}
})



 let flatListPaginationItems=_.sortBy([...paginationVisibleItems,...paginationVisiblePadItems],"index")
console.log(" flatListPaginationItems: ",flatListPaginationItems);

if(debugMode){
    console.log("paginationVisibleItemsIndexList",paginationVisibleItemsIndexList)
    console.log("paginationVisibleItems",paginationVisibleItems)
    console.log("paginationVisiblePadItems",paginationVisiblePadItems)
    console.log("flatListPaginationItems",flatListPaginationItems)

  this._showDebuggerModeLog(paginationItems,flatListPaginationItems,paginationVisiblePadItems,paginationVisibleItemsIndexList,mapWithItemProperty)
}





 // this.setState({paginationItems:flatListPaginationItems})

// console.log(" horizontal: ",horizontal);
// let horizontalStyle={width,position:"absolute", right:0,left:0,bottom:5,padding:5,flex:1,justifyContent:"center",alignItems:'center',flexDirection:"row",}
let verticalStyle={height,alignItems:"center", justifyContent: 'space-between', position:"absolute",top:0,margin:0,bottom:0,right:0,bottom:0,padding:0,flex:1,}
let horizontalStyle={width,alignItems:"center", justifyContent: 'space-between', position:"absolute",margin:0,bottom:10,left:0,right:0,padding:0,flex:1,}

if(horizontal===true)PaginationContainerStyle=horizontalStyle
else if(paginationStyle)PaginationContainerStyle=paginationStyle
else PaginationContainerStyle=verticalStyle
// console.warn(" s: ",PaginationContainerStyle===verticalStyle);
// console.warn(" s: ",PaginationContainerStyle===paginationStyle);
// console.warn(" s: ",horizontal);
//if(hideEmptyDots)
// flatListPaginationItems=flatListPaginationItems.map(o=>_.compactObject(o))

    return (
      <View style={[PaginationContainerStyle,containerStyle]}>
        <View style={[{
          flex: 1,
          marginTop:(horizontal===true)?0:20,
          marginBottom:(horizontal===true)?0:20,
          marginLeft:(horizontal===true)?5:0,
          marginRight:(horizontal===true)?5:0,
          width:(horizontal===true)?width:40,
          height:(horizontal===false)?height:30,
      flexDirection: (horizontal==true)?"row":"column",
      justifyContent: 'center',alignItems:"center"},]}>



    <Dot StartDot {...this.props}  onPress={this.onStartDotPress} styles={[dotStyle,startDotStyle]}/>

{showStartingJumpDot &&
    <Dot jumpItems={flatListPaginationItems} endingJumpSize={(endingJumpSize)?endingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
  }
  {flatListPaginationItems.map((item,i) => {
  // console.log(" o: ",o);

  LayoutAnimation.configureNext(dotAnimation)
      return (<View style={{flex:1}} key={i}>
            {!DotComponent &&
                <Dot {...this.props} item={item} key={`paginationDot${i}`}/>
            }
            {DotComponent &&
                <DotComponent {...this.props} key={`paginationDot${i}`}/>
            }
            </View>)
    })}
    {showEndingJumpDot &&
      <Dot jumpItems={flatListPaginationItems} startingJumpSize={(startingJumpSize)?startingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
    }
    <Dot EndDot  {...this.props} onPress={this.onEndDotPress} styles={[dotStyle,endDotStyle]}/>

</View>
</View>
    );

  }
  _showDebuggerModeLog(paginationItems,flatListPaginationItems,paginationVisiblePadItems,paginationVisibleItemsIndexList,mapWithItemProperty){
  // Naming Convention: X _ Indexs ([x]ai)
  // flatListPaginationItems.map(console.log)
  let paginationItemsIndexList=paginationItems.map(i=>i[mapWithItemProperty])
  let allDotsIndexList=flatListPaginationItems.map(i=>i[mapWithItemProperty])
  let NOT_ACTIVE_DOTS_INDEXES=_.sortBy(paginationVisiblePadItems.map(i=>i[mapWithItemProperty]))
  let ALL_DOTS_INDEXES=flatListPaginationItems.map(i=>i.isViewable)


      let ___=`%c __________________________________________\n`
      let ADBY=`%c all paginationVisibleItems dots:              ${allDotsIndexList} \n`
      let ADI=`%c active paginationVisibleItems dots:           ${paginationVisibleItemsIndexList} \n`
      let ANDI=`%c not active dots: (padding):    ${NOT_ACTIVE_DOTS_INDEXES} \n`

      let ADI_ISVIEWABLE=`%c each "paginationVisibleItems dots" "isViewable" attribute:\n                      ${ALL_DOTS_INDEXES} \n`
      let AID=`%c all "paginationItems"'s':       ${paginationItemsIndexList} \n`

      console.log('\n\n%cGarrett Mac\'s React Native Pagination'+"%c \ndebugMode: ON\n"+___+ADBY+ADI+ANDI+___+ADI_ISVIEWABLE+___+AID, 'color: #01a699','color: #f99137','color: #f99137','color: #a94920','color: #00a7f8','color: #3b539a','color: #32db64','color: #00c59e','color: #3b539a','color: #488aff');
      // console.log('\n\n%c Garrett Mac\'s React Native Pagination\n'+);


  }
  onEndDotPress(){}
  onStartDotPress(){}
  onDotPress(){}
  onPressForward(o){
    if(this.props.onPressForward)this.props.onPressForward(o)
  }
  renderPreviousTouchable(){
    const {dotStyle,backButtonStyle,textStyle,backComponent,horizontal,backwardStyle} = this.props

     if(backComponent)return backComponent
     else return (<TouchableOpacity onPress={()=>this.scrollToStart()}  style={[dotStyle,backwardStyle,backButtonStyle,{alignItems:'center',flexDirection:(horizontal===false)?"column":"row",}]}>
          <Text style={[{textAlign:"center",flexDirection:(horizontal==false)?"row":"column"},textStyle]}>  {(horizontal===false)?"↑":"←"}</Text>
        {/* <Text style={[{textAlign:"center",flexDirection:(horizontal===false)?"row":"column"},textStyle]}>  {_.min(changed)}</Text> */}
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

totalDots:10,
paginationVisibleItems:[],
paginationItems:[],
// arrayOfchangedRows:[],
horizontal             : false,
pageRangeDisplayed    : 10,
hideEmptyDots:false,


activeItemIndex:null,
hideEmptyDotComponents:false,
paginationItemPadSize:3,


// didActionIconName:"read",
dotAnimation:LayoutAnimation.Presets.easeInEaseOut,

}

//NOT WORKING (I dont know why)
Pagination.PropTypes={
  paginationItems:PropTypes.array,
  visableItemList:PropTypes.array,

}






/*
//  TODO/WIP add normal pagination (without scroll)
// pageGroupIndex: initialPage ? initialPage :forcePage   ? forcePage :0

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
*/
