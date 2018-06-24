/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,Animated,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';
const showLogs = true;
export default class Dot extends Component {
  	constructor(props) {
  		super(props);
  		this.shouldUpdate = false;
  		this.AnimatedValue = new Animated.Value(0);
  	}
  	render() {
  		let {
  			hideEmptyDots,
  			iconSet,
  			color,
  			name,
  			onPress,
  			navOnPress,
  			text,
  			horizontal,
  			iconStyle,
  			dotStyle,
  			style,
  			StartDot,
  			dotIconHide,
  			textStyle,
  			EndDot,
  			item,
  			size,
  			dotSwapAxis,
  			dotPositionSwap,
  			dotComponent
  		} = this.props;
  		dotSwapAxis = !dotSwapAxis;
  		if (horizontal == true)
  			dotPositionSwap = !dotPositionSwap;
  		if (StartDot)
  			if (startDotSwapAxis) dotSwapAxis = !dotSwapAxis;
  		if (EndDot) {
  			if (endDotSwapAxis) dotSwapAxis = !dotSwapAxis;
  			if (endDotPositionSwap) dotPositionSwap = !dotPositionSwap;
  		}
    return (
        <TouchableOpacity onPress={onPress}
        style={[ { flex:1,flexDirection:(horizontal == (dotSwapAxis) ? true : false) ? 'column' : 'row',justifyContent: 'center',alignItems: 'center' },style ]}>
          {(name && dotPositionSwap) &&
            <Icon name={name} iconStyle={iconStyle} size={size} color={color} iconSet={iconSet} />
        }
          {(dotComponent && dotPositionSwap) &&
        <View>{dotComponent}</View>
        }
        <Text
        // adjustsFontSizeToFit={true}
        // numberOfLines={1}
              style={[ { textAlign: 'center',
            fontWeight:(_.get(item,'isViewable',false) === true) ? '600' : '500' },textStyle ]}>
          {text}
            </Text>
          <View style={{ flexDirection:(horizontal !== (dotSwapAxis) ? true : false) ? 'row' : 'column' }}>
          {(name && !dotPositionSwap) &&
              <Icon name={name} iconStyle={iconStyle} size={size} color={color} iconSet={iconSet} />
          }
            {(dotComponent && !dotPositionSwap) &&
          <View>{dotComponent}</View>
          }
        </View>
      </TouchableOpacity>
    );
  }
}
Dot.defaultProps = {
  size:15,
  isActive:false,
  item:{},
  dotFontSize:15,
  textStyle:{},
  iconStyle:{},
  style:{ flex:1,backgroundColor:'rgba(0,0,0,0)',justifyContent:'center',alignItems:'center' },
  dotSwapAxis:false,
  dotIconHide:false,
  dotPositionSwap:false
};
