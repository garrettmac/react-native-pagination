/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class SectionListHorizontalExample extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
