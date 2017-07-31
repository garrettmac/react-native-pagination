/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SectionList,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';

export default class HorizontalBasicSectionList extends Component {
  render() {
    return (<View style={{flex: 1,height,width,justifyContent: "center",alignItems: "center",backgroundColor: "#F5FCFF",}}>
<Text style={{textAlignVertical: "center", textAlign: "center",fontSize: 20,}}>
  Coming Soon
</Text>
      </View>);
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
