import 'react-native';
import {View,FlatList} from 'react-native';
import React from 'react';
// import Pagination from 'react-native-pagination';
import HorizontalBasicFlatList from '../Pages/HorizontalBasicFlatList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
//
// const startState = {
//   todos: [{ id: 1, done: false, name: 'Buy Milk' }]
// };
//
// const finState = toggleDone(startState, 1);
//
// expect(finState.todos).toEqual([
//   { id: 1, done: true, name: 'Buy Milk' }
// ]);


  describe('HorizontalBasicFlatList Components', function() {
    // it('Renders Pagination Class!', () => {const tree = renderer.create(<Pagination/>);});
    // test('Flat List Visable', () => {
    //   expect(sum(1, 2)).toBe(3);
    // });
//     exports[`Todo component renders the todo correctly renders correctly 1`] = `
// <div
//   className="todo  todo-1">
//   <p
//     className="toggle-todo"
//     onClick={[Function]}>
//     Buy Milk
//   </p>
//   <a
//     className="delete-todo"
//     href="#"
//     onClick={[Function]}>
//     Delete
//   </a>
// </div>
// `;
    const component = renderer.create(    <View >
          {/* <FlatList
            horizontal
             pagingEnabled
            data={[]}
            //keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
            //renderItem={this._renderItem}
            //onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}//need this
          /> */}
          <Pagination
            horizontal
            // dotThemeLight //<--use with backgroundColor:"grey"
          //  listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
            //visible={this.state.viewableItems}//needs to track what the user sees
          //  data={this.state.items}//pass the same list as data
            padSize={3} //num of items to pad above and bellow your visable items
            // totalDots={6}
          />
        </View>
      );
    let tree = component.toJSON();
    // console.log(" tree: ",tree);
    test('Flat List Visable', () => {

  expect(tree).toMatchSnapshot();
})
  //
  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  });


// var Icon=require('react-native-pagination/components/Icon')
// var sum=require('react-native-pagination/components/sum').default
// import sum from 'react-native-pagination/components/sum';






// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
