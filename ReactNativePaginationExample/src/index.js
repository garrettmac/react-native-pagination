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

  import RobotsExample from './containers/RobotsExample';
  import PagedCardsExample from './containers/PagedCardsExample';
  import ContactListExample from './containers/ContactListExample';
  import ContactListExampleLightTheme from './containers/ContactListExampleLightTheme';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Component: RobotsExample,
      Component: ContactListExample,
      // Component: ContactListExampleLightTheme,
      // Component: PagedCardsExample,
      // Component: null,
      showHeader:true,
    };
  }



  renderExample([Component, title,backgroundColor]) {
    return (
      <TouchableOpacity
        key={title}
        style={[s.button,{backgroundColor}]}
        onPress={() => this.setState({ Component })}
      >
        <Text style={{color:"white",fontWeight:"500"}}>{title}</Text>
      </TouchableOpacity>
    );
  }

  renderBackButton() {
    return (
      <TouchableOpacity
        style={s.back}
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
      <View style={s.container}>
        {Component &&
          <Component provider={null} />
      }
        {Component && this.renderBackButton()}
          {!Component &&
            <View style={[s.contents]}>
              <View style={[s.headingContainer]}>
                <Text style={[s.headingText]}>React Native Pagination</Text>
                <Text style={[s.subHeadingText]}>Example Application</Text>
                <View style={[s.lineDivider]}/>
              </View>
              <ScrollView
                contentContainerStyle={s.scrollview}
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
      [RobotsExample, 'Robots Example - Horizontal Advanced FlatList',"rgba(0,166,155,.8)"],
      [PagedCardsExample, 'Paged Cards Example - Horizontal Paged',"rgba(0,136,155,.8)"],
      [ContactListExample , 'Contact List Example 1 - Vertical FlatList',"rgba(166,0,155,.8)"],
      [ContactListExampleLightTheme , 'Contact List Example 2 - Vertical FlatList \n  (Dots Light Theme)',"rgba(166,0,125,.8)"],
    ]
    )
  }
}

const s = StyleSheet.create({
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
    marginTop: 8,
    paddingHorizontal: 18,
    paddingVertical: 11,
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
  contents:{height,width, backgroundColor: "#F5FCFF",},
  headingContainer:{marginTop:40,padding:5,backgroundColor:"transparent",},
  headingText:{fontSize: 25,color: '#444',margin: 5,fontWeight: '700'},
  subHeadingText:{fontSize: 18,color: '#a4a6a6',margin: 5,fontWeight: '400'},
  lineDivider:{width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 10},
});
