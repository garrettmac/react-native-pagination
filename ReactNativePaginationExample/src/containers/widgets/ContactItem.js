PropTypes

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import _ from 'lodash';
import PropTypes from 'prop-types';





export default class ListItem extends Component {
  // Generates a Hex Color for a string
  stringToHex(str) {
    if(!str)str="none"
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }


  render(){

const {name,avatar,color,seen,selected,key,id,tag,onPressItem,description} = this.props
// console.log(" this.props: ",this.props);
let TagColor="#33333"
  if(color)TagColor=color;
  if(!color&&tag)TagColor=this.stringToHex(this.props.tag)
    return ( <TouchableOpacity style={[{flex:1,justifyContent: "center",alignItems: "center",},]} onPress ={(item) =>onPressItem(item)}>

      <View style= {{paddingBottom:15,paddingTop:15,flex: 1,width, flexDirection:'row', borderBottomWidth:1,opacity:0.5, borderColor:'#e3e3e3'}}>
<View style={{alignSelf:'center', justifyContent:'center',}}>
  <View style={{borderRadius:5,borderWidth:1,borderColor:TagColor,backgroundColor:TagColor,alignSelf:'center', justifyContent:'center'}}>
        <Text style={{padding:1, textAlign:"center",fontWeight:'400', color:'#fff', fontSize:10}}>{tag}</Text>
  </View>
          {avatar &&
            <Image source ={{uri: avatar}} resizeMode ="contain" style={{height:50, width:50, margin:8, borderRadius:25, backgroundColor:'#f8f8f8'}} />
          }
    </View>
      <View style={{alignSelf:'center', justifyContent:'center'}}>
      <View style = {{flexDirection:'row', justifyContent:'space-between', width:210}}>
      <Text style={{fontWeight:'600', color:TagColor}}>{name}</Text>
      </View>
      {description &&
        <Text style ={{height:35, fontSize:12,fontWeight:'300', color:TagColor}}> {description}</Text>
      }
      </View>
      </View>
      </TouchableOpacity>
)

  }
}


ListItem.PropTypes={
  key:PropTypes.number,
  onPressItem:PropTypes.function,
  // selected:PropTypes.boolean,
  seen:PropTypes.boolean,
  name:PropTypes.string,
  avatar:PropTypes.string,
  tag:PropTypes.string,
  createTagColor:PropTypes.boolean,
}
ListItem.DefaultProps={
  // name:PropTypes.string,
  // avatar:PropTypes.string,
  // tag:"",
  selected:false,
  createTagColor:true,
}
