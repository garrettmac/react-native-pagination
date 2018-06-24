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
    const { iconFamily, name, size, color } = this.props;
    let Icon = null;
    if (iconFamily === 'Entypo')Icon = Entypo;
    else if (iconFamily === 'EvilIcons')Icon = EvilIcons;
    else if (iconFamily === 'FontAwesome')Icon = FontAwesome;
    else if (iconFamily === 'Foundation')Icon = Foundation;
    else if (iconFamily === 'Ionicons')Icon = Ionicons;
    else if (iconFamily === 'SimpleLineIcons')Icon = SimpleLineIcons;
    else if (iconFamily === 'MaterialIcons')Icon = MaterialIcons;
    else if (iconFamily === 'MaterialCommunityIcons')Icon = MaterialCommunityIcons;
    else if (iconFamily === 'Octicons')Icon = Octicons;
    else if (iconFamily === 'Zocial')Icon = Zocial;
    else Icon = MaterialCommunityIcons;
    return <Icon name={name} size={size} color={color} />;
  }
}
Icon.defaultProps = {
  iconFamily: 'MaterialCommunityIcons'
};
Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
