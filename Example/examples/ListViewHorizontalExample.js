/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import ListItems from './ListItems';
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ListViewHorizontalExample extends Component {
  render() {
    return (
      <View style={styles.container}>

<ListView style={{flex: 1,width,height,}}
      //initialListSize={10}
      //noScroll={true}
      //onChangeVisibleRows={this._onChangeVisibleRows}
      //onEndReached={this._onChangeVisibleRows}
      //pageSize={this._pageSize}
      //renderFooter={this._renderFooter}
      //renderHeader={this._renderHeader}
      //renderScrollComponent={this._renderScrollComponent}
      //scrollRenderAheadDistance={this._scrollRenderAheadDistance}
      //enableEmptySections={true}
      dataSource={ds.cloneWithRows(ListItems)}
      renderRow={(o,i) =>
      <TouchableOpacity key={`sectionlist-item-${i}`} onPress={()=>(o.onPress)?o.onPress:alert("pressed item")}><Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>{(o.name)?o.name:"no name attrabute"}</Text></TouchableOpacity>
      }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
