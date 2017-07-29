/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';
class DotContents {
  constructor() {

  }
  render(){
    const {item,horizontal,textStyle} = this.props

    return (<View style={[{},]}>
    <Text style={[{textAlign: "center",fontWeight:"600",fontSize:9,flexDirection:(horizontal===true)?"row":"column"},textStyle]}>
      {_.isNumber(item.key)?item.key+1:item.key}
    </Text>
    {/*! <Icon name={(item.isViewable===false)?(_.has(item,"index"))?this.props:this.props.offScreenIconName:this.props.onScreenIconName} size={(item.isViewable===true)?this.props.offScreenIconSize:this.props.onScreenIconSize} color={this.Color(o)}/> */}
  </View>

)
  }
}
export default class Dot extends Component {


  render() {
    let {

        item,
        dotThemeLight,
        onPress,
        textStyle,

        //dots
        StartDot,EndDot,
        //dots styles
        dotStyle,startDotStyle,endDotStyle,
        //start/finish dot Icon
        startDotIconName,endDotIconName,
        startDotIconSize,endDotIconSize,
        startDotIconColor,endDotIconColor,
        //dot text
        startDotFontSize,endDotFontSize,
        startDotTextColor,endDotTextColor,
        startDotText,endDotText,
        //dot position
        dotSwapAxis,startDotSwapAxis,endDotSwapAxis,
        horizontal,
        dotIconFamily,startDotIconFamily,endDotIconFamily,

        dotPositionIconBeforeText,startDotPositionIconBeforeText,endDotPositionIconBeforeText,
        //dot section visablity
        dotIconHide,startDotIconHide,endDotIconHide,
        dotTextHide,startDotTextHide,endDotTextHide,


        //pagination dots only
        dotIconNameNotActive,dotIconNameActive,dotIconNameEmpty,
        dotIconSizeNotActive,dotIconSizeActive,dotIconSizeEmpty,
        dotIconColorNotActive,dotIconColorActive,dotIconColorEmpty,
        dotFontSizeNotActive,dotFontSizeActive,dotFontSizeEmpty,
        dotTextColorNotActive,dotTextColorActive,dotTextColorEmpty,
      } = this.props


    let dotIconName,dotIconSize,dotIconColor,dotFontSize

    if(dotThemeLight){
      dotIconColorActive="rgba(255,255,255,.5)"
      dotIconColorNotActive="rgba(255,255,255,.4)"
      dotIconColorEmpty="rgba(255,255,255,.2)"

      dotTextColorActive="rgba(255,255,255,.5)"
      dotTextColorNotActive="rgba(255,255,255,.4)"
      dotTextColorEmpty="rgba(255,255,255,.2)"
    }

    //setup dots icon
    if(_.get(item,'isViewable',false)===true)dotIconName=dotIconNameActive
    else dotIconName=dotIconNameNotActive
    if(!_.has(item,"index"))dotIconName=dotIconNameEmpty

    if(_.get(item,'isViewable',false)===true)dotIconSize=dotIconSizeActive
    else dotIconSize=dotIconSizeNotActive
    if(!_.has(item,"index"))dotIconSize=dotIconSizeEmpty

    if(_.get(item,'isViewable',false)===true)dotIconColor=dotIconColorActive
    else dotIconColor=dotIconColorNotActive
    if(!_.has(item,"index"))dotIconColor=dotIconColorEmpty

    //setup dots font
    if(_.get(item,'isViewable',false)===true)dotFontSize=dotFontSizeActive
    else dotFontSize=dotFontSizeNotActive
    if(!_.has(item,"index"))dotFontSize=dotFontSizeEmpty

    if(_.get(item,'isViewable',false)===true)dotTextColor=dotTextColorActive
    else dotTextColor=dotTextColorNotActive
    if(!_.has(item,"index"))dotTextColor=dotTextColorEmpty




    if(StartDot){
      //style
      if(startDotStyle)dotStyle=startDotStyle

      if(startDotIconName)dotIconName=startDotIconName
      if(startDotIconSize)dotIconSize=startDotIconSize
      if(startDotIconFamily)iconFamily=startDotIconFamily
      if(startDotIconColor)dotIconColor=startDotIconColor

      if(startDotFontSize)dotFontSize=startDotFontSize
      if(startDotTextHide)dotTextHide=!dotTextHide
      if(startDotTextColor)dotTextColor=startDotTextColor
      //positioning
      if(startDotIconHide)dotIconHide=!dotIconHide
      if(startDotSwapAxis)dotSwapAxis=!dotSwapAxis
      if(startDotPositionIconBeforeText)dotPositionIconBeforeText=!dotPositionIconBeforeText

    }
    if(EndDot){
      if(endDotStyle)dotStyle=endDotStyle

      if(endDotIconFamily)iconFamily=endDotIconFamily
      if(endDotIconName)dotIconName=endDotIconName
      if(endDotIconSize)dotIconSize=endDotIconSize
      if(endDotIconColor)dotIconColor=endDotIconColor

      if(endDotTextHide)dotTextHide=!dotTextHide
      if(endDotFontSize)dotFontSize=endDotFontSize
      if(endDotTextColor)dotTextColor=endDotTextColor
      //positioning
      if(endDotIconHide)dotIconHide=!dotIconHide
      if(endDotSwapAxis)dotSwapAxis=!dotSwapAxis
      if(endDotPositionIconBeforeText)dotPositionIconBeforeText=!dotPositionIconBeforeText

    }

    const text = (o) => {
       if(StartDot)return startDotText
       else if(EndDot)return endDotText
      else if(!_.has(o,'index'))return
      return `${_.isNumber(o.index)?o.index+1:o.index} `
    }
    const icon = (o) => {
      if((!_.has(o,'index'))&&!EndDot&&!StartDot)return
      return <Icon name={dotIconName}  size={dotIconSize} color={dotIconColor} iconFamily={dotIconFamily}/>
    }



    return (

      <TouchableOpacity onPress={()=>(onPress)?onPress(item):""}
       style={[{flex:1,flexDirection:(horizontal==(dotSwapAxis)?true:false)?"column":"row",justifyContent: "center",alignItems: "center"},dotStyle,]}>
       <View style={{flexDirection:(horizontal!==(dotSwapAxis)?true:false)?"row":"column"}}>

         {(!dotIconHide && dotPositionIconBeforeText) &&
           icon(item)
         }
    {!dotTextHide &&
      <Text style={[{textAlign: "center",
        fontWeight:(_.get(item,'isViewable',false)===true)?"600":"500",
        fontSize:dotFontSize},{color:dotTextColor},textStyle]}>
      {text(item)}
    </Text>
    }
</View>
<View style={{flexDirection:(horizontal!==(dotSwapAxis)?true:false)?"row":"column"}}>

{(!dotIconHide && !dotPositionIconBeforeText) &&
  icon(item)
}
</View>


  </TouchableOpacity>
    );
  }
}

//item:{index:null,},
Dot.defaultProps={
  dotIconNameEmpty:"close",
  dotIconNameActive:"checkbox-blank-circle",
  dotIconNameNotActive:"checkbox-blank-circle-outline",


  dotIconSizeNotActive:10,
  dotIconSizeActive:15,
  dotIconSizeEmpty:10,

  startDotIconSize:15,
  endDotIconSize:15,

  dotFontSizeNotActive:9,
  dotFontSizeActive:11,
  dotFontSizeEmpty:9,

  startDotFontSize:11,
  endDotFontSize:11,

  dotIconColorNotActive:"rgba(0,0,0,.5)",
  dotIconColorActive:"rgba(0,0,0,.3)",
  dotIconColorEmpty:"rgba(0,0,0,.2)",

  dotTextColorNotActive:"rgba(0,0,0,.5)",
  dotTextColorActive:"rgba(0,0,0,.3)",
  dotTextColorEmpty:"rgba(0,0,0,.2)",

  dotThemeLight:false,

//for start and finish dots



startDotIconName:"chevron-up",
endDotIconName:"chevron-down",
dotSwapAxis:false,
dotIconHide:false,
// dotPositionIconBeforeText:true,
dotPositionIconBeforeText:false,

}


Dot.PropTypes={
item:{
  index:null
}
}
