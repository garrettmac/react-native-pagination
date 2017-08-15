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

  import RobotsExample from './Pages/RobotsExample';
  import PagedCardsExample from './Pages/PagedCardsExample';
  // import HorizontalBasicListView from './Pages/HorizontalBasicListView';
  // import HorizontalBasicSectionList from './Pages/HorizontalBasicSectionList';

  import ContactListExample from './Pages/ContactListExample';
  import ContactListExampleLightTheme from './Pages/ContactListExampleLightTheme';
  // import VerticalBasicListView from './Pages/VerticalBasicListView';
  // import VerticalBasicSectionList from './Pages/VerticalBasicSectionList';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Component: RobotsExample,
      Component: PagedCardsExample,
      // Component: null,
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
        <View style={{marginTop:40,padding:5,backgroundColor:"transparent",}}>
          <Text style={{fontSize: 25,color: '#444',margin: 5,fontWeight: '700'}}>
            React Native Pagination
          </Text>
          <Text style={{fontSize: 18,color: '#a4a6a6',margin: 5,fontWeight: '400'}}>
            Example Application
          </Text>
          <View style={{
              width: 50,borderBottomWidth: 1,borderColor: '#e3e3e3',margin: 5,marginTop: 5,marginBottom: 10}}/>
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
      [RobotsExample, 'Horizontal Advanced FlatList Example',"rgba(0,166,155,.8)"],
      [PagedCardsExample, 'Horizontal Paged Example',"rgba(0,136,155,.8)"],
      // [HorizontalBasicListView , 'Horizontal Basic ListView Example',"rgba(0,106,155,.8)"],
      // [HorizontalBasicSectionList , 'Horizontal Basic SectionList Example',"rgba(0,76,155,.8)"],

      [ContactListExample , 'Vertical FlatList Example',"rgba(166,0,155,.8)"],
      [ContactListExampleLightTheme , 'Vertical FlatList Example \n     (Dots Light Theme)',"rgba(166,0,125,.8)"],
      // [VerticalBasicListView , 'Vertical Basic ListView Example',"rgba(166,0,95,.8)"],
      // [VerticalBasicSectionList , 'Vertical Basic SectionList Example',"rgba(166,0,65,.8)"],
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
});
