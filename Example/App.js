import React,{Component} from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import FlatListHorizontalExample from './examples/FlatListHorizontalExample';
import ListViewHorizontalExample from './examples/ListViewHorizontalExample';
import SectionListHorizontalExample from './examples/SectionListHorizontalExample';

import FlatListVerticalExample from './examples/FlatListVerticalExample';
import ListViewVerticalExample from './examples/ListViewVerticalExample';
import SectionListVerticalExample from './examples/SectionListVerticalExample';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Component: FlatListHorizontalExample,
      Component: null,
      showHeader:true,
    };
  }

  renderExample([Component, title,backgroundColor]) {
    return (
      <TouchableOpacity
        key={title}
        style={[styles.button,{backgroundColor}]}
        onPress={() => this.setState({ Component })}
      >
        <Text style={{color:"white",fontWeight:"500"}}>{title}</Text>
      </TouchableOpacity>
    );
  }

  renderBackButton() {
    return (
      <TouchableOpacity
        style={styles.back}
        onPress={() => this.setState({ showHeader:true,Component: null })}
      >
        <Text style={{ fontSize: 15,backgroundColor:"transparent" }}>← Back</Text>
      </TouchableOpacity>
    );
  }



  renderExamples(examples) {
    const {
      Component,
    } = this.state;

    return (
      <View style={styles.container}>
        {Component &&
          <Component provider={null} />
      }
        {Component && this.renderBackButton()}
        {!Component &&
          <View style={{height,width, backgroundColor: "#F5FCFF",}}>
        <View style={{marginTop:50,padding:5}}>
          <Text style={{fontSize: 25,color: '#444',margin: 5,fontWeight: '700'}}>
            React Native Pagination
          </Text>
          <Text style={{fontSize: 18,color: '#a4a6a6',margin: 5,fontWeight: '400'}}>
            Example Application
          </Text>
          <View style={{width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 30}}/>
      </View>
          <ScrollView
            style={{}}
            contentContainerStyle={styles.scrollview}
            showsVerticalScrollIndicator={false}
          >
            {examples.map(example => this.renderExample(example))}
          </ScrollView>
          </View>
        }
      </View>
    );
  }

  render() {
    return this.renderExamples([
      // [<component>, <component title>,<color>]
      [FlatListHorizontalExample, 'Horizontal FlatList Example',"rgba(0,166,155,.8)"],
      [ListViewHorizontalExample, 'Horizontal ListView Example',"rgba(0,136,155,.8)"],
      [SectionListHorizontalExample , 'Horizontal SectionList Example',"rgba(0,106,155,.8)"],
      [FlatListVerticalExample , 'Vertical FlatList Example',"rgba(166,0,155,.8)"],
      [ListViewVerticalExample , 'Vertical ListView Example',"rgba(166,0,125,.8)"],
      [SectionListVerticalExample , 'Vertical SectionList Example',"rgba(166,0,95,.8)"],
    ]
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  button: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 5,
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 0,
    padding: 12,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
