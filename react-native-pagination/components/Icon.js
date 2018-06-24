/* @flow */
import React, { Component } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';
export default class Icon extends Component {
  render() {
    const { iconSet,name,size,color } = this.props;
    let Icon = null;
    if (iconSet === 'Entypo')Icon = Entypo;
    else if (iconSet === 'EvilIcons')Icon = EvilIcons;
    else if (iconSet === 'FontAwesome')Icon = FontAwesome;
    else if (iconSet === 'Foundation')Icon = Foundation;
    else if (iconSet === 'Ionicons')Icon = Ionicons;
    else if (iconSet === 'SimpleLineIcons')Icon = SimpleLineIcons;
    else if (iconSet === 'MaterialIcons')Icon = MaterialIcons;
    else if (iconSet === 'MaterialCommunityIcons')Icon = MaterialCommunityIcons;
    else if (iconSet === 'Octicons')Icon = Octicons;
    else if (iconSet === 'Zocial')Icon = Zocial;
    else Icon = MaterialCommunityIcons;
    return (<Icon name={name} size={size} color={color} />);
  }
}
Icon.defaultProps = {
  iconSet:'MaterialCommunityIcons'
};
Icon.PropTypes = {
  name:PropTypes.string,
  size:PropTypes.number,
  color:PropTypes.string
};
