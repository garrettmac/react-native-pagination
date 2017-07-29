/* @flow */

import React, { Component } from 'react';
import _ from 'lodash';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SectionList,ListView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class VerticalBasicSectionList extends Component {
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
