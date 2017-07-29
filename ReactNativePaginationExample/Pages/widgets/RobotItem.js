



import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  LayoutAnimation,
  Dimensions,
TouchableOpacity,
  Image,
} from 'react-native';

let darkColor="black"
let lightColor="white"
// import randomcolor from 'randomcolor';



  const {width, height} = Dimensions.get('window');
  import _ from 'lodash';
  import PropTypes from 'prop-types';







export default class RobotItem extends Component {
  render() {


const {
  key,
  image,
  title,
  color,
  description,
  type,
  city,
}=this.props
console.log(" key: ",key);

    return (
      <View style={{
        flex: 1,
        // marginTop:40,
        // hei:40,
          backgroundColor:color,
          opacity:0.9,
          width,
          // margin:5,
          borderRadius:5,

      }}>

      <View style={{flexDirection: 'row'}}>
            <Image style={s.profilePicture} source={{height: 80,width: 80,uri:image}}/>

          <Text style={s.displayName}>{title}</Text>
            <View style={s.badgeSection}>
              <View style={[s.badgeSlug, {backgroundColor: "white"}]}>
                <Text style={[s.badgeText,{color: "red"}]}>
                  ff{city}
                </Text>
              </View>
            </View>
          </View>

        <View>
          <Text style={s.bodyText}>
            {description}
          </Text>
        </View>
        <View style={s.reactionBox}>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() => {
              LayoutAnimation.easeInEaseOut()
              // this.setState({
                // footerText: this.state.footerText + 1
              // })
            }}
          >
            <Text style={[s.description, {
              textShadowColor: darkColor
            }]}>
              {city}- {description}
            </Text>
          </TouchableHighlight>
          <Text style={[s.footerText, {color: darkColor}]}>
            {description}
          </Text>
        </View>
      </View>
    );
  }
}





const s = StyleSheet.create({
  bodyText: {
    fontSize: 32,
    color: 'white',
    backgroundColor: 'transparent',
    margin: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  reactionBox: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 40,
  },
  description: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 10,
    padding: 15,
    color:"white",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 5,
      heigth: 5
    },
  },

  footerText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    // fontSize: 10,
    color:"white",
    padding: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },




  //-------
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 20,
    marginRight: 10
  },
  displayName: {
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: 0,
    marginTop: 22,

    fontSize: 20,
    marginBottom: 5,
  },
  badgeSection: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
    justifyContent: 'center'
  },
  badgeSlug: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  badgeText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },

});



RobotItem.PropTypes={
  key:PropTypes.number,
  index:PropTypes.number,
  name:PropTypes.string,
  avatar:PropTypes.string,
  group:PropTypes.string,
  email:PropTypes.string,
}
RobotItem.DefaultProps={
  // title:PropTypes.string,
  // image:PropTypes.string,
  // tag:"",
  selected:false,
  createTagColor:true,
}
