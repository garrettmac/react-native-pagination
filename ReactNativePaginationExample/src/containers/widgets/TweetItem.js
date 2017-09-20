



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







export default class Tweet extends Component {
  render() {


const {
  id,
  index,
  key,
  title,
  city,
  type,
  color,
  description,
  image,
}=this.props

// console.warn(" image: ",image);
    return (
      <View style={{
        flex: 1,
        // marginTop:40,
          backgroundColor:color,
          opacity:0.9,
          width,
          // margin:5,
          borderRadius:5,
      }}>

      <View style={{
          padding:5,marginTop:35,margin:5, flexDirection: 'row'}}>
            <Image style={s.profilePicture} source={{height: 80,width: 80,uri:image}}/>

          <Text style={[s.displayName,{flex:1,}]}>{title}</Text>
        <View style={[{height:20,},s.badgeSection]}>
              <View style={[s.badgeSlug, {backgroundColor: "white"}]}>
                <Text style={[s.badgeText,{color: 'rgba(0,0,0,.6)',}]}>
                  ({index}) in {city}
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
            },{color: darkColor}]}>
            {description}
            </Text>
          </TouchableHighlight>

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
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      heigth: 2
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
    // flex: 1,
top:0,bottom:0,right:0,
position:"absolute",
    marginRight: 10,
    // marginTop: 15,
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



Tweet.PropTypes={
  id:PropTypes.number,
    index:PropTypes.number,
    key:PropTypes.number,
    title:PropTypes.string,
    city:PropTypes.string,
    type:PropTypes.string,
    color:PropTypes.string,
    description:PropTypes.string,
    image:PropTypes.string,
}
Tweet.DefaultProps={
  // title:PropTypes.string,
  // image:PropTypes.string,
  // tag:"",
  selected:false,
  createTagColor:true,
}
