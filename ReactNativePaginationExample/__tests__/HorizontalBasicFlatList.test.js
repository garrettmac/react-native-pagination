import 'react-native';
import { FlatList, View } from 'react-native';
import React from 'react';
// Import Pagination from 'react-native-pagination';
import HorizontalBasicFlatList from '../Pages/HorizontalBasicFlatList';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
/*
 *
 * Const startState = {
 *   todos: [{ id: 1, done: false, name: 'Buy Milk' }]
 * };
 *
 * const finState = toggleDone(startState, 1);
 *
 * expect(finState.todos).toEqual([
 *   { id: 1, done: true, name: 'Buy Milk' }
 * ]);
 */
describe('HorizontalBasicFlatList Components', () => {
  /*
   * It('Renders Pagination Class!', () => {const tree = renderer.create(<Pagination/>);});
   * Test('Flat List Visable', () => {
   *   Expect(sum(1, 2)).toBe(3);
   * });
   *     Exports[`Todo component renders the todo correctly renders correctly 1`] = `
   * <div
   *   ClassName="todo  todo-1">
   *   <p
   *     ClassName="toggle-todo"
   *     OnClick={[Function]}>
   *     Buy Milk
   *   </p>
   *   <a
   *     ClassName="delete-todo"
   *     Href="#"
   *     OnClick={[Function]}>
   *     Delete
   *   </a>
   * </div>
   * `;
   */
  const component = renderer.create(
      <View>
        {/* <FlatList
            horizontal
             pagingEnabled
            data={[]}
            //keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
            //renderItem={this._renderItem}
            //onViewableItemsChanged={this.onViewableItemsChanged}//need this
          /> */}
        <Pagination
          horizontal
          /*
       * DotThemeLight //<--use with backgroundColor:"grey"
       *  ListRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
       * visible={this.state.viewableItems}//needs to track what the user sees
       *  Data={this.state.items}//pass the same list as data
       */
          padSize={3}
        />
      </View>
    ),
    tree = component.toJSON();
  // Console.log(" tree: ",tree);
  it('Flat List Visable', () => {
    expect(tree).toMatchSnapshot();
  });
  /*
   *
   * // manually trigger the callback
   * tree.props.onMouseEnter();
   * // re-rendering
   * tree = component.toJSON();
   * expect(tree).toMatchSnapshot();
   *
   * // manually trigger the callback
   * tree.props.onMouseLeave();
   * // re-rendering
   * tree = component.toJSON();
   * expect(tree).toMatchSnapshot();
   */
});
/*
 * Var Icon=require('react-native-pagination/components/Icon')
 * Var sum=require('react-native-pagination/components/sum').default
 * Import sum from 'react-native-pagination/components/sum';
 * Test('adds 1 + 2 to equal 3', () => {
 *   Expect(sum(1, 2)).toBe(3);
 * });
 */
