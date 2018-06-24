/* @flow */
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';
export default class Dot extends Component {
  render() {
    let {
          disableDotOnPressNavigation,
          disableStartDotOnPressNavigation,
          disableEndDotOnPressNavigation,
          dotOnPress,
          startDotOnPress,
          endDotOnPress,
          item,
          dotThemeLight,
          onPress,
          textStyle,
          // Dots
          StartDot, EndDot,
          // Dots styles
          dotStyle, startDotStyle, endDotStyle,
          dotIconStyle, startDotIconStyle, endDotIconStyle, // Add to docs
          // Start/finish dot Icon
          startDotIconName, endDotIconName,
          startDotIconSize, endDotIconSize,
          startDotIconColor, endDotIconColor,
          // Dot text
          startDotFontSize, endDotFontSize,
          startDotTextColor, endDotTextColor,
          startDotText, endDotText,
          // Dot position
          dotSwapAxis, startDotSwapAxis, endDotSwapAxis,
          horizontal,
          dotIconFamily, startDotIconFamily, endDotIconFamily,
          dotPositionSwap, startDotPositionSwap, endDotPositionSwap,
          // Dot section visablity
          dotIconHide, startDotIconHide, endDotIconHide,
          dotTextHide, startDotTextHide, endDotTextHide,
          dotEmptyHide,
          // Pagination dots only
          dotIconNameNotActive, dotIconNameActive, dotIconNameEmpty,
          dotIconSizeNotActive, dotIconSizeActive, dotIconSizeEmpty,
          dotIconColorNotActive, dotIconColorActive, dotIconColorEmpty,
          dotFontSizeNotActive, dotFontSizeActive, dotFontSizeEmpty,
          dotTextColorNotActive, dotTextColorActive, dotTextColorEmpty,
          showStartingJumpDot, showEndingJumpDot,
          jumpItems,
          endingJumpSize,
          startingJumpSize
        } = this.props,
        dotFontSize, dotIconColor, dotIconName, dotIconSize;
    if (dotThemeLight) {
      dotIconColorActive = 'rgba(255,255,255,.5)';
      dotIconColorNotActive = 'rgba(255,255,255,.4)';
      dotIconColorEmpty = 'rgba(255,255,255,.2)';
      dotTextColorActive = 'rgba(255,255,255,.5)';
      dotTextColorNotActive = 'rgba(255,255,255,.4)';
      dotTextColorEmpty = 'rgba(255,255,255,.2)';
    }
    let onPressDot = (item) => {
      if (!disableDotOnPressNavigation) try {
        this.props.listRef.scrollToItem(item);
      } catch (e) {
        console.log(' e: ', e);
      }
      if (dotOnPress)dotOnPress(item);
    };
    if (!dotIconSizeNotActive)dotIconSizeNotActive = 10;
    if (!dotIconSizeActive)dotIconSizeActive = 15;
    if (!dotIconSizeEmpty)dotIconSizeEmpty = 20;
    /*
     * Console.warn(_.get(item,"index",false));
     * Setup dots icon
     */
    if (_.get(item, 'isViewable', false) === true)dotIconName = dotIconNameActive;
    else dotIconName = dotIconNameNotActive;
    if (_.get(item, 'index', true) === true) {
      dotIconHide = dotEmptyHide;
      dotIconName = dotIconNameEmpty;
    }
    /*
     * If(dotTextHide)dotTextHide=true
     * console.warn(" item.index: ",_.has(item,"index"),_.has(item,"index"));
     */
    if (_.get(item, 'isViewable', false) === true)dotIconSize = dotIconSizeActive;
    else dotIconSize = dotIconSizeNotActive;
    if (_.get(item, 'index', true) === true)dotIconSize = dotIconSizeEmpty;
    if (_.get(item, 'isViewable', false) === true)dotIconColor = dotIconColorActive;
    else dotIconColor = dotIconColorNotActive;
    if (_.get(item, 'index', true) === true)dotIconColor = dotIconColorEmpty;
    // Setup dots font
    if (_.get(item, 'isViewable', false) === true)dotFontSize = dotFontSizeActive;
    else dotFontSize = dotFontSizeNotActive;
    if (_.get(item, 'index', true) === true)dotFontSize = dotFontSizeEmpty;
    if (_.get(item, 'isViewable', false) === true)dotTextColor = dotTextColorActive;
    else dotTextColor = dotTextColorNotActive;
    if (_.get(item, 'index', true) === true)dotTextColor = dotTextColorEmpty;
    dotSwapAxis = !dotSwapAxis;
    if (horizontal == true) dotPositionSwap = !dotPositionSwap;
    if (StartDot) {
      dotIconHide = false;// Reset
      /*
       *Style
       *console.log(" horizontal: ",horizontal);
       */
      if (startDotStyle)dotStyle = startDotStyle;
      if (startDotIconStyle)dotIconStyle = startDotIconStyle;
      if (horizontal === true)dotIconName = 'chevron-left';
      if (horizontal === false)dotIconName = 'chevron-up';
      if (startDotIconName)dotIconName = startDotIconName;
      if (startDotIconSize)dotIconSize = startDotIconSize;
      if (startDotIconFamily)dotIconFamily = startDotIconFamily;
      if (startDotIconColor)dotIconColor = startDotIconColor;
      if (startDotFontSize)dotFontSize = startDotFontSize;
      if (startDotTextHide)dotTextHide = true;
      if (startDotTextColor)dotTextColor = startDotTextColor;
      // Positioning
      if (startDotIconHide)dotIconHide = true;
      if (startDotSwapAxis)dotSwapAxis = !dotSwapAxis;
      if (startDotPositionSwap)dotPositionSwap = !dotPositionSwap;
      onPressDot = (item) => {
        if (!disableStartDotOnPressNavigation) try {
          this.props.listRef.scrollToOffset({ x: 0,
            y: 0,
            amimated: true });
        } catch (e) {
          console.log(' e: ', e);
        }
        if (startDotOnPress)startDotOnPress(item);
      };
    }
    if (EndDot) {
      if (endDotStyle)dotStyle = endDotStyle;
      if (!endDotText)dotTextHide = true;
      dotIconHide = false;// Reset
      if (endDotIconStyle)dotIconStyle = endDotIconStyle;
      if (horizontal === true)dotIconName = 'chevron-right';
      if (horizontal === false)dotIconName = 'chevron-down';
      if (endDotIconName)dotIconName = endDotIconName;
      if (endDotIconFamily)dotIconFamily = endDotIconFamily;
      if (endDotIconSize)dotIconSize = endDotIconSize;
      if (endDotIconColor)dotIconColor = endDotIconColor;
      if (endDotTextHide)dotTextHide = true;
      if (endDotFontSize)dotFontSize = endDotFontSize;
      if (endDotTextColor)dotTextColor = endDotTextColor;
      // Positioning
      if (endDotIconHide)dotIconHide = true;
      if (endDotSwapAxis)dotSwapAxis = !dotSwapAxis;
      if (endDotPositionSwap)dotPositionSwap = !dotPositionSwap;
      // Console.warn(" dotIconFamily: ",dotIconFamily);
      onPressDot = (item) => {
        this.props.listRef.scrollToEnd();
        // If(!disableEndDotOnPressNavigation){try {this.props.listRef.scrollToItem(jumpItems[1])} catch (e) {console.log(" e: ",e);}}
        if (endDotOnPress)endDotOnPress(item);
      };
    }
    const text = (o) => {
            if (!o) return '';
            if (_.has(o, 'item.paginationDotText')) return o.item.paginationDotText;
            // Console.warn(_.isUndefined(o,'index'),_.get(o,'index'));
            /*
             *  If(StartDot)return startDotText
             *  else if(EndDot)return endDotText
             *  else if(jumpItems)return 5
             *  else if(showEndingJumpDot)return 5
             */
            if (_.isNumber(_.get(o, 'index', false))) return ` ${o.index + 1} `;
            return '';
          },
          icon = (o) => {
            if (_.isUndefined(o, 'index') && !EndDot && !startingJumpSize && !endingJumpSize && !StartDot) return;
            return <Icon name={dotIconName} size={dotIconSize} color={dotIconColor} iconFamily={dotIconFamily} />;
          };
    return (
        <TouchableOpacity
        onPress={() => onPressDot(item)}
        style={[
          { flex: 1,
            flexDirection: horizontal == dotSwapAxis ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center' },
          dotStyle
        ]}
      >
        <View style={{ flexDirection: horizontal !== dotSwapAxis ? 'row' : 'column',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center' }}
        >
                {!dotIconHide && dotPositionSwap &&
              (<View style={[ dotIconStyle ]}>
                {icon(item)}
              </View>)
          }
          {!dotTextHide &&
                (<Text style={[
                  { textAlign: 'center',
                    fontWeight: _.get(item, 'isViewable', false) === true ? '600' : '500',
                    fontSize: dotFontSize },
                  { color: dotTextColor },
                  textStyle
                ]}
                >
                  {text(item)}
                </Text>)
          }
            </View>
        <View style={{ flexDirection: horizontal !== dotSwapAxis ? 'row' : 'column' }}>
          {!dotIconHide && !dotPositionSwap &&
            <View style={[ dotIconStyle ]}>
            {icon(item)}
          </View>
          }
            </View>
      </TouchableOpacity>
    );
  }
  onPress(item, disableDotOnPressNavigation) {
    console.log(' item: ', item);
    console.log(' this.props: ', this.props.listRef);
  // ScrollTo(ref="FlatListRef",x=0,y=0){
  }
}
// Item:{index:null,},
Dot.defaultProps = {
  dotIconNameEmpty: 'close',
  dotIconNameActive: 'checkbox-blank-circle',
  dotIconNameNotActive: 'checkbox-blank-circle-outline',
  dotEmptyHide: false,
  /*
   *
   * DotIconSizeNotActive:10,
   * dotIconSizeActive:15,
   * dotIconSizeEmpty:20,
   */
  dotFontSizeNotActive: 9,
  dotFontSizeActive: 11,
  dotFontSizeEmpty: 9,
  startDotFontSize: 11,
  endDotFontSize: 11,
  dotIconColorNotActive: 'rgba(0,0,0,.5)',
  dotIconColorActive: 'rgba(0,0,0,.3)',
  dotIconColorEmpty: 'rgba(0,0,0,.2)',
  dotTextColorNotActive: 'rgba(0,0,0,.5)',
  dotTextColorActive: 'rgba(0,0,0,.3)',
  dotTextColorEmpty: 'rgba(0,0,0,.2)',
  dotThemeLight: false,
  /*
   * For start and finish dots
   * StartDotStyle:{},
   * EndDotStyle:{},
   */
  dotStyle: { flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center' },
  /*
   * StartDotIconName:"chevron-up",
   * EndDotIconName:"chevron-down",
   */
  dotSwapAxis: false,
  dotIconHide: false,
  dotIconStyle: {},
  // DotPositionSwap:true,
  dotPositionSwap: false
/*
 * StartDotStyle:{alignItems:"center"},
 * endDotStyle:{alignItems:"center"},
 */
};
/*
 *
 * Dot.propTypes={
 * Item:{
 *   Index:null
 * }
 * }
 */
