/* @flow */
import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
const { width, height } = Dimensions.get('window');
import _ from 'lodash';
import PropTypes from 'prop-types';
import { MockPersonList } from '../FakerMocks';
import Pagination from 'react-native-pagination';
// Import {getMoviesFromApi} from './ListItems';
import ContactItem from './widgets/ContactItem';
export default class VerticalAdvancedFlatList extends Component {
  state = {
    items: MockPersonList,
    selected: new Map()
  };
  _keyExtractor = (item, index) => item.id.toString();
  _onPressItem = (id: string) => {
    // Updater functions are preferred for transactional updates
    this.setState(state => {
      // Copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // Toggle
      return { selected };
    });
  };
  _renderItem = ({ item }) => (
    // console.log(" item: ",item);
    <ContactItem
      index={item.id}
      id={item.key}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      name={item.name}
      avatar={item.avatar}
      description={item.email}
      tag={item.group}
      createTagColor
    />
  );
  // need this
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({ viewableItems, changed });
  };

  render() {
    let heading = 'Contacts',
      subheading = 'Flat List Vertical Example';
    let ListHeaderComponent = (
      <View style={[{ padding: 10 }, s.containerMarginTop]}>
        <Text
          style={{ fontSize: 35, color: '#444', margin: 5, fontWeight: '700' }}
        >
          {heading ? heading : 'Heading'}
        </Text>
        <Text
          style={{ fontSize: 17, color: '#444', margin: 5, fontWeight: '400' }}
        >
          {subheading}
        </Text>
        <View
          style={{
            width: 50,
            borderBottomWidth: 1,
            borderColor: '#e3e3e3',
            margin: 5,
            marginTop: 5,
            marginBottom: 30
          }}
        />
      </View>
    );
    return (
      <View style={[s.container]}>
        <FlatList
          data={this.state.items}
          ref={r => (this.refs = r)}
          keyExtractor={this._keyExtractor} // map your keys to whatever unique ids the have (mine is a "key" proptery)
          renderItem={this._renderItem}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
        <Pagination
          debugMode
          dotIconNameActive="contacts"
          dotTextColor="red"
          dotSwapAxis
          dotPositionSwap
          dotTextColorActive="green"
          dotTextColorNotActive="red"
          dotTextColorEmpty="blue"
          dotIconColorActive="green"
          dotIconColorNotActive="red"
          dotIconColorEmpty="blue"
          // DotThemeLight //<--use with backgroundColor:"grey"
          listRef={this.refs} // to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
          paginationVisibleItems={this.state.viewableItems} // needs to track what the user sees
          paginationItems={this.state.items} // pass the same list as data
          paginationItemPadSize={3} // num of items to pad above and bellow your visable items
        />
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1
    // BackgroundColor:"grey",
  },
  pagination: {
    backgroundColor: 'rgba(0,0,0,0)',
    width,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 7,
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  containerMarginTop: {
    marginTop: 30
  }
});
VerticalAdvancedFlatList.defaultProps = {
  data: MockPersonList
};
