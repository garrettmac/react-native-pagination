/* @flow */
import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
const { width } = Dimensions.get('window');
import _ from 'lodash';
import { MockPersonList } from '../mocks';
import Pagination, { Dot } from '../../react-native-pagination';
import ContactItem from './widgets/ContactItem';
export default class ContactListExampleLightTheme extends Component {
  constructor(props) {
    super(props);
    this.state = { items: MockPersonList };

}
  _keyExtractor = (item) => item.id.toString();
  _onPressItem = (id: string) => {
    // Updater functions are preferred for transactional updates
    this.setState((state) => {
      // Copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // Toggle
      return { selected };
});
};
  _renderItem = ({ item }) => (<ContactItem
         index={item.id}
         id={item.key}
         onPressItem={this._onPressItem}
      //  Selected={!!this.state.selected.get(item.id)}
         name={item.name}
         avatar={item.avatar}
         description={item.email}
         tag={item.group}
         createTagColor
     />)
  ;
 _renderIteme = ({ item, separators }) => {
   console.log(' item: ', item);
   return (
	<TouchableHighlight
    onHideUnderlay={separators.unhighlight}
    onPress={() => this._onPress(item)}
    onShowUnderlay={separators.highlight}
	>
		<View style={{ backgroundColor: 'white' }}>
			<Text>
				{item.title}
}
			
			</Text>
		</View>
	</TouchableHighlight>);
}
 // Need this
 onViewableItemsChanged = ({ viewableItems, changed }) => {
   this.setState({
 viewableItems,
changed
});
};
 renderDot = (o, i) =>  {
   return (<Dot
     key={i}
     onPress={()=>{try {this.refs.scrollToItem(o);} catch (e) {console.log(' e: ',e);}}}
     isViewable={o.isViewable}
     size={o.isViewable ? 20 : 15}
     textStyle={{ color:'rgba(255,255,255,0.6)',fontSize:8,width,margin:5 }}
     text={_.get(o, 'item.name','').split(' ')[0]}
     style={{ margin:1,marginRight:5,backgroundColor:'transparent',justifyContent: 'center',alignItems: 'center' }} />);
}
 render() {

   return (
	<View style={[ s.container ]}>
		<FlatList
    data={this.state.items}
    keyExtractor={this._keyExtractor}
    onViewableItemsChanged={this.onViewableItemsChanged}// Map your keys to whatever unique ids the have (mine is a "key" proptery)
    ref={r => this.refs = r}
    renderItem={this._renderItem}
		/>
		<Pagination

         /*
          * To allow React Native Pagination to scroll
          * (make sure list has "ref={r=>this.refs=r}")
          */
    dotIconSizeActive={25}
    paginationContainerStyle={{
 position: 'absolute',
top: 150,
bottom: 0,
right: 0,
width: 40,
paddingTop: 200,
paddingBottom: 200
}}
    paginationItems={this.state.items}
    paginationVisibleItems={this.state.viewableItems}
    pagingEnabled
    ref={r => this.refs = r}// Needs to track what the user sees
    renderDot={this.renderDot}
		/>
	</View>
   );
}
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2530'
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
  containerMarginTop: { marginTop: 30 }
});
ContactListExampleLightTheme.defaultProps = { data: MockPersonList };
