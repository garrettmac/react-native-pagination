import React,{Component} from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
} from 'react-native';

import FlatListHorizontalExample from './examples/FlatListHorizontalExample';
import ListViewHorizontalExample from './examples/ListViewHorizontalExample';
import SectionListHorizontalExample from './examples/SectionListHorizontalExample';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: FlatListHorizontalExample,
    };
  }

  renderExample([Component, title]) {
    return (
      <TouchableOpacity
        key={title}
        style={styles.button}
        onPress={() => this.setState({ Component })}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }

  renderBackButton() {
    return (
      <TouchableOpacity
        style={styles.back}
        onPress={() => this.setState({ Component: null })}
      >
        <Text style={{ fontSize: 15 }}>← Back</Text>
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
          <ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={styles.scrollview}
            showsVerticalScrollIndicator={false}
          >
            {examples.map(example => this.renderExample(example))}
          </ScrollView>
        }
      </View>
    );
  }

  render() {
    return this.renderExamples([
      // [<component>, <component title>]
      [FlatListHorizontalExample, 'Horizontal FlatList Example'],
      [ListViewHorizontalExample, 'Horizontal ListView Example'],
      [SectionListHorizontalExample , 'Horizontal SectionList Example'],
    ]
    );
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
    backgroundColor: 'rgba(220,220,220,0.7)',
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
