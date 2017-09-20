/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,Animated,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';
import PropTypes from 'prop-types';
import {MockPersonList} from '../mocks';
import Pagination,{Dot} from '../../react-native-pagination';
// import {getMoviesFromApi} from './ListItems';



import ContactItem from './widgets/ContactItem';
export default class ContactListExample extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      items: MockPersonList,
    };
    this.renderDot=this.renderDot.bind(this)
  }

  _keyExtractor = (item, index) => item.id;



  _renderItem = ({item}) => {
    // console.log(" item: ",item);
  return (<ContactItem
       index={item.id}
       id={item.key}

       name={item.name}
       avatar={item.avatar}
       description={item.email}
       tag={item.group}
       createTagColor
     />)
 };


 renderDot(o,i){

   let dotComponent=(<Animated.Image
     source={{uri:o.item.avatar}}
     style={{
       backgroundColor:"rgba(0,0,0,0.1)",
         width: o.isViewable?28:15,
         height: o.isViewable?28:15,
         opacity: o.isViewable?1:.5,
         borderRadius: o.isViewable?14:7.5,
       }}
         />)
 return (<Dot
  onPress={()=>{try {this.refs.scrollToItem(o)} catch (e) {console.log(" e: ",e)}}}
  isViewable={o.isViewable}
  dotComponent={dotComponent}
  dotSwapAxis
dotPositionSwap
  size={o.isViewable?20:15}
  textStyle={{color:"rgba(0,0,0,0.6)",fontSize:8,width:50,margin:5}}
  text={_.get(o, "item.name","").split(" ")[0]}
  style={{margin:1,marginRight:5,backgroundColor:"transparent",width:50,justifyContent: "center",alignItems: "center",}}/>)
 }
 //need this
 onViewableItemsChanged = ({ viewableItems, changed }) => {
  this.setState({viewableItems,changed})
};
  render() {
    let heading="Contacts",subheading="Flat List Vertical Example"
    let ListHeaderComponent=(<View style={[{padding: 10},s.containerMarginTop]}>
      <Text style={{fontSize: 35,color: '#444',margin: 5,fontWeight: '700'}}>{(heading)?heading:"Heading"}</Text>
      <Text style={{fontSize: 17,color: '#444',margin: 5,fontWeight: '400'}}>{subheading}</Text>
    <View style={{width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 30}}/>
    </View>)
    return (
      <View style={[s.container]}>
        <FlatList
            data={this.state.items}
              ref={r=>this.refs=r}
            keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "key" proptery)
            renderItem={this._renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}//need this
          />
          <Pagination
        // to allow React Native Pagination to scroll
        // (make sure list has "ref={r=>this.refs=r}")
        refs={this.refs}
        // paginationContainerStyle={{position:"absolute",top:150,bottom:0,right:0,width:40,paddingTop:200,paddingBottom:200}}
        renderDot={this.renderDot}
        dotIconSizeActive={25}
        paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
        paginationItems={this.state.items}//pass the same list as data
        //paginationItemPadSize={2} //num of items to pad above and bellow your visable items
      />

      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"grey",
  },
  pagination:{
     backgroundColor:"rgba(0,0,0,0)",
     width,
     position:"absolute",
      right:0,
      left:0,
      bottom:7,
      padding:0,
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      flexDirection:"row",
  },
  containerMarginTop: {
    marginTop: 30,
  },
});



ContactListExample.defaultProps = {
  data:MockPersonList
}
