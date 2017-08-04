# React Native Pagination Roadmap.

## Version 1

- [ ]  Test and Document the usage of custom `DotComponent`  https://github.com/garrettmac/react-native-pagination/blob/master/react-native-pagination/index.js#L161

 - [ ] Test with `ListView`, `ScrollView` and `SectionList` and rethink if tracking by `dots` index's (to track index) is still the best approach  

- [ ] Figure out why `PropTypes` do not throw errors

- [ ] Avoid passing new closures to subcomponents  ( eg. `{()=>onPressDot(item)}`) 
[Why? Learn More](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8)

- [ ] It feels like scrolling using  `scrollToOffset` through props is a bad idea (maybe anti-pattern?). Read more about triggering scroll events for all React Native List types. 


## Version 2

- [ ] Simplify. Remove a lot of props and use the `DotComponent` instead.
