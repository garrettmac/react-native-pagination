import 'react-native';
import React from 'react';
import Pagination from 'react-native-pagination';
import Icon from 'react-native-pagination/components/Icon';
import Dot from 'react-native-pagination/components/Dot';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('React Native Pagination Tests', () => {

  describe('Render Components', () => {
    it('Renders Pagination Class!', () => {

      const tree = renderer.create(<Pagination />);
    });
    it('Renders Icon Class!', () => {
      const tree = renderer.create(<Icon />);
    
});
    it('Renders Dot Class!', () => {

      const tree = renderer.create(<Dot />);

});
  });

});
