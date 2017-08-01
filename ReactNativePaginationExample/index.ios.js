import React,{Component} from 'react';
import {View,AppRegistry} from 'react-native';
import Icon from './icon.js';
// import App from './App.js';
/* @flow */



export default class MyComponent extends Component {
  render() {
    return (
    <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: "#F5FCFF",}}>
      <View style={{position:"absolute",top:25,right:10,flex:1,zIndex:3,width:35,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
              <Icon  size={25} color="rgba(256,256,256,0.5)"/>
          </View>
    </View>
    );
  }
}



AppRegistry.registerComponent('ReactNativePaginationExample', () => MyComponent);
