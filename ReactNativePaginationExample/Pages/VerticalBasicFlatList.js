/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';

export default class VerticalBasicFlatList extends Component {
  render() {
    return (<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",backgroundColor: "#F5FCFF",}}>

      </View>);
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
