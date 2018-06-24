import React, { Component } from 'react';
import {
 Animated,
  FlatList,
  StyleSheet, Text, View
} from 'react-native';
import Pagination from 'react-native-pagination';
import TweetItem from './widgets/TweetItem';
import { MockTweetList } from '../mocks';
export default class PagedCardsExample extends Component {
 state = { items: MockTweetList };
  AnimatedValue = new Animated.Value(0);
  // Render list seen here [TODO ADD URL]
  _renderItem = ({ item }) => (<TweetItem
    index={item.id}
    id={item.id}
    onPressItem={this._onPressItem}
    title={item.title}
    city={item.city}
    type={item.type}
    color={item.color}
    description={item.description}
    image={item.image}
  />)

  /*
   * ComponentDidMount() {
   * setTimeout(() => {
   *   this.setState({items:MockTweetList})
   * }, 3000);
   * }
   */
  _keyExtractor = (item, index) => item.id.toString();
  // REQUIRED for ReactNativePagination to work correctly
  onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({ viewableItems })
onPressDot=(item) => console.log(' onPressDot:item ', item);
componentWillReceiveProps(nextProps) {
  this.AnimatedValue.setValue(0);
}
render() {
  const loadingComponent = <Text style={[ s.textStyle ]}>
Loading
</Text>;
  return (
	<View style={[ s.container ]}>
		<FlatList
    data={this.state.items}
    horizontal
    keyExtractor={this._keyExtractor}
    onViewableItemsChanged={this.onViewableItemsChanged}
    pagingEnabled// Map your keys to whatever unique ids the have (mine is a "id" prop)
    ref={(r) => this.refs = r}
    renderItem={this._renderItem}
		/>
		<Pagination
    dotIconSizeActive={25}
    horizontal
        /*
         * To allow React Native Pagination to scroll
         * (make sure list has "ref={r=>this.refs=r}")
         */
    lightTheme
    paginationItemPadSize={4}
    paginationItems={this.state.items}
    paginationVisibleItems={this.state.viewableItems}
        /*
         *LoadingComponent={loadingComponent}
         * renderDot={this.renderDot}
         */
    pagingEnabled
    refs={this.refs}// Needs to track what the user sees
    showEndDot// Pass the same list as data
    showStartDot
		/>
	</View>);
}
}
const s = StyleSheet.create({
  textStyle: {
 color: 'rgba(0,0,0,0.5)',
textAlignVertical: 'center',
textAlign: 'center'
},
  container: {
    flex: 1,
    backgroundColor: 'grey'// <-- use with "dotThemeLight"
  },
  paginationDotStyle: {
 margin: 1,
backgroundColor: 'transparent',
justifyContent: 'center',
alignItems: 'center'
}
});
