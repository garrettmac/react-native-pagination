import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';

// import { Page } from 'animationDemo/src/components';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
// this.props = {
//    value: new Animated.Value(0),
//    active: false,
//  };
export default class Icon extends Component {

  constructor(props) {
    super(props);
    this.value=new Animated.Value(props.value)
  }
  componentWillReceiveProps(nextProps) {
    // console.warn(" nextProps: ",nextProps);
  }
  toggle(){
    if(this.props.onPress)this.props.onPress()
    this.value.setValue(0);
    const {animation} = this.props
    // if(!Animation)
    Animated.timing(this.value, animation).start();
    this.props.active=!this.props.active
  }


  render() {
    const {
      value,
      fontSize,
      activeName,
      name,
      color,
      activeColor,
      active,
      animation,
  } = this.props
    return (<View style={styles.container}>
                <View>
                   <TouchableWithoutFeedback
                     underlayColor="transparent"
                     onPress={() =>
                       this.toggle()
                     }>
                     <AnimatedIcon
                       name={active ? activeName : name}
                       style={{
                         fontSize: fontSize,
                         color: active ? activeColor : color,
                         transform: [
                           {
                             scale: this.value.interpolate({
                               inputRange: [0, 0.6, 1],
                               outputRange: [1, 1.5, 1],
                             }),
                           },
                         ],
                       }}
                     />
                   </TouchableWithoutFeedback>
                 </View>
                 </View>);
  }
}

const styles = StyleSheet.create({
  // container: {justifyContent: 'center',alignItems: "center",flex: 1,}
  container: {}
});


Icon.defaultProps={
  value:0,
  fontSize:40,
  activeName:"heart",
  name:"heart-outline",
  color:"rgb(0,0,0,0.5)",
  activeColor:"rgb(245,60,60,0.8)",
  active:false,
  animation:{toValue: 1,duration: 500,}
}
