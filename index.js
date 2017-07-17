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

export default class Pagination extends Component {
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
  render() {




    const {
      groupSize,
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
      arrayOfAll,
      arrayOfBounds,
      arrayOfVisable,
      arrayOfIndexesSeen,
      arrayOfchangedRows,
    arrayOfChanged,
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

//     let arrayOfchangedRows= _.keys(_.get(arrayOfChanged,"s1",arrayOfChanged)).map(i =>parseInt(i))
//     let arrayOfIndexesSeen= _.keys(_.get(arrayOfVisable,"s1",arrayOfVisable)).map(i =>parseInt(i))
// console.log(" arrayOfIndexesSeen: ",arrayOfIndexesSeen);
// console.log(" arrayOfchangedRows: ",arrayOfchangedRows);
// let {0: first, [arrayOfIndexesSeen.length-1]: last} = arrayOfIndexesSeen;
// if(!first)first=0
// if(!last)last=0
// // let middle=arrayOfIndexesSeen[Math.round((arrayOfIndexesSeen.length - 1) / 2)]
// // let middle=arrayOfIndexesSeen[Math.round((arrayOfIndexesSeen.length - 1) / last)]
//
//
// let ArrayOfAll=arrayOfAll.map((item,i) =>{ return {...item,pagination_index:i+1}})
//  let pages=_.chunk(ArrayOfAll,groupSize)
// // var indexOfHighestActiveIndex=Math.round(((last-1)/groupSize) / pages.length)
// // var indexOfHighestActiveIndex=parseInt(Math.round(((last-1)/groupSize) / pages.length))
// var indexOfHighestActiveIndex=Math.ceil(last / groupSize)-1
// // if(!_.isNumber(indexOfHighestActiveIndex))indexOfHighestActiveIndex=0
// if(isNaN(indexOfHighestActiveIndex)||indexOfHighestActiveIndex<0)indexOfHighestActiveIndex=0
// console.log(" indexOfHighestActiveIndex: ",indexOfHighestActiveIndex);
// console.log(" pages: ",pages);
//
let activeGroup=[]
// if(_.isArray(pages[indexOfHighestActiveIndex]))activeGroup=pages[indexOfHighestActiveIndex]
// console.log(" activeGroup: ",activeGroup);
// //active group v2
// console.log(" Array.min(arrayOfchangedRows): ",Array.min(arrayOfchangedRows));
// console.log(" last): ",last);
let min=Array.min(arrayOfIndexesSeen)-2
let max=Array.max(arrayOfIndexesSeen)+2
if(min<0)min=0
// arrayOfchangedRows
// arrayOfIndexesSeen
// if(max>arrayOfIndexesSeen.length){
//   max-1
// }
// if(max>arrayOfIndexesSeen.length){
//   max-1
// }
activeGroup=arrayOfAll.slice(min,max);
// console.log(" activeGroup: ",activeGroup);
// // let highestActiveIndex= arrayOfIndexesSeen[last]
// //().between(first,last)
// //().between(first,10)
// console.log(" first: ",first);
// console.log(" last: ",last);
// console.log(" pages.length: ",pages.length);
// console.log(" pages: ",pages);
//
//
//
// let {0: firstchanged, [arrayOfIndexesSeen.length-1]: lastchanged} = arrayOfchangedRows;
// let {0: firstseen, [arrayOfIndexesSeen.length-1]: lastseen} = arrayOfIndexesSeen;
// console.log(" arrayOfchangedRows: ",arrayOfchangedRows);
// console.log(" arrayOfIndexesSeen: ",arrayOfIndexesSeen);
// arrayOfchangedRows.map((i) => {
//  if(i&&ArrayOfAll[i]){
//    ArrayOfAll[i]["icon_color"]="rgba(0,0,0,.4)"
//  }
// })
// arrayOfIndexesSeen.map((i) => {
//  if(i&&ArrayOfAll[i]){
//    ArrayOfAll[i]["user_has_seen"]=true
//   //  ArrayOfAll[i]["icon_color"]="white"
//  }
// })


    return (
      <View style={[containerStyle]}>
          <TouchableOpacity onPress={this.props.onPressForward} style={[backwardStyle,backButtonStyle]}>
            <Text style={[textStyle]}>{backText} {Array.min(arrayOfchangedRows)}</Text>
        </TouchableOpacity>

        {activeGroup.map((item,i) => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              return (<TouchableOpacity key={i} style={[{}, dotStyle]}>
                <Icon name={this.Name(item)} size={20} color={this.Color(item)}/>
              <Text style={{zIndex:4,top:15,color:"white",fontWeight:"600",position:"absolute",textAlign: "center",fontSize:9}}>

                  {item.pagination_index}
                </Text>
                      </TouchableOpacity>)
        })}


     <TouchableOpacity onPress={this.props.onPressBack}  style={[dotStyle,nextStyle]}>

       <Text style={[textStyle]}> {(arrayOfAll.length-Array.min(arrayOfchangedRows))+1} {nextText}</Text>

     </TouchableOpacity>

</View>
    );
  }
}

const s = StyleSheet.create({
  container: {

  },
});

Pagination.defaultProps={
  iconFamily:"MaterialCommunityIcons",
containerStyle:{flex: 1,width,height:null},
textStyle:{fontSize: 10,width:50,color:"white",textAlign: "center",},
dotStyle:{flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:"center",alignItems:'center',},
nextStyle:{flex:1},
backwardStyle:{flex:1},
groupSize:10,
nextText:"→",
backText:"←",
arrayOfVisable:[],
arrayOfchangedRows:[],
newIconName:"new-box",
defaultIconName:"newspaper",
didActionIconName:"read",
iconColorhasSeen:"rgba(255,255,255,1)",
iconColorhasNotSeen:"rgba(0,0,0,.5)",
iconColorhasCompletedAction:"rgba(0,189,110,.5)",


}

Pagination.PropTypes={
  arrayOfAll:PropTypes.array,
}
