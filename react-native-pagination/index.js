/**
 * @author garrettmac <garrett@vyga.io> (http://vyga.io)
 * @version 1.0.4
 * @module ReactNativePagination (https://github.com/garrettmac/react-native-pagination)
 */
import React, { Component } from 'react';
import {
  Dimensions,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity, View
} from 'react-native';
import _ from 'lodash';
_.mixin({ compactObject: (o) => _.each(o, (v, k) => {
  if (!v) delete o[k];
}) });
import Icon from './components/Icon';
import Dot from './components/Dot';
const { width, height } = Dimensions.get('window');
import PropTypes from 'prop-types';
/*
 * Helper functions
 * Export default class Pagination extends Component {
 */
class Pagination extends Component {
  render() {
    let {
      iconFamily,
      textStyle,
      containerStyle,
      nextButtonStyle,
      backButtonStyle,
      backwardStyle,
      dotStyle,
      backText,
      backStyle,
      nextText,
      nextStyle,
      paginationItemPadSize,
      paginationVisibleItems,
      paginationItems,
      horizontal,
      startDotStyle,
      DotComponent,
      endDotStyle,
      debugMode,
      dotAnimation,
      paginationStyle,
      pagingEnabled,
      // ShowStartingJumpDot,showEndingJumpDot,endingJumpSize,startingJumpSize,
      hideEmptyDots
    } = this.props;
    paginationItems = paginationItems.map((item, i) => {
      item.paginationIndexId = i;
      item.index = i;
      item.paginationHasSeenItem = false;
      item.paginationHasPressedItem = false;
      item.paginationSelectedItem = false;
      return item;
    });
    // PaginationVisibleItemsIndexList this list of index that you want to remove or you'll see two active icon buttons
    const paginationVisibleItemsIndexList = paginationVisibleItems.map((i) => i.index);
    if (pagingEnabled)
      // Fix issue where it says two visable list items are active when only one should be
      if (paginationVisibleItemsIndexList.length > 1) {
        paginationVisibleItems = paginationVisibleItems.map((o) => {
          if (o.index === _.min(paginationVisibleItemsIndexList)) return { index: _.get(o, 'index'),
            key: _.get(o, 'key'),
            item: _.get(o, 'item', {}),
            isViewable: false };
          return o;
        });
      }
    // Gets max and min pads. should look something like [0, -1, -2, 2, 3, 4] if [0,1] are viewable and paginationItemPadSize is 3
    const getVisibleArrayIndexes = (paginationVisibleItems, paginationVisibleItemsIndexList, paginationItemPadSize) => {
            const preIniquePaddedIndexList = [
                    ..._.times(paginationItemPadSize, (i) => _.min(paginationVisibleItemsIndexList) - (i + 1)),
                    ..._.times(paginationItemPadSize, (i) => _.max(paginationVisibleItemsIndexList) + (i + 1))
                  ],
                  uniquePaddedIndexList = preIniquePaddedIndexList.map((num, i) => {
                    if (num < 0) return _.max(paginationVisibleItemsIndexList) + (num *= -1);
                    return num;
                  });
            return _.uniq(uniquePaddedIndexList);
          },
          paginationVisableItemsIndexArray = getVisibleArrayIndexes(paginationVisibleItems, paginationVisibleItemsIndexList, paginationItemPadSize),
          paginationVisiblePadItems = paginationVisableItemsIndexArray.map((o, i) => ({ index: _.get(paginationItems, `[${o}].paginationIndexId`),
            key: _.get(paginationItems, `[${o}].paginationIndexId`),
            item: _.get(paginationItems, `[${o}]`, {}),
            isViewable: false })),
          flatListPaginationItems = _.sortBy([
            ...paginationVisibleItems,
            ...paginationVisiblePadItems
          ], 'index');
    if (debugMode) {
      const paginationItemsIndexList = paginationItems.map((i) => i.index),
            allDotsIndexList = flatListPaginationItems.map((i) => i.index),
            NOT_ACTIVE_DOTS_INDEXES = _.sortBy(paginationVisiblePadItems.map((i) => i.index)),
            ALL_DOTS_INDEXES = flatListPaginationItems.map((i) => i.isViewable),
            ___ = '%c __________________________________________\n',
            ADBY = `%c all paginationVisibleItems dots:              ${allDotsIndexList} \n`,
            ADI = `%c active paginationVisibleItems dots:           ${paginationVisibleItemsIndexList} \n`,
            ANDI = `%c not active dots: (padding):    ${NOT_ACTIVE_DOTS_INDEXES} \n`,
            ADI_ISVIEWABLE = `%c each "paginationVisibleItems dots" "isViewable" attribute:\n                      ${ALL_DOTS_INDEXES} \n`,
            AID = `%c all "paginationItems"'s':       ${paginationItemsIndexList} \n`;
      console.log(`${'\n\n%cGarrett Mac\'s React Native Pagination' + '%c \ndebugMode: ON\n'}${___}${ADBY}${ADI}${ANDI}${___}${ADI_ISVIEWABLE}${___}${AID}`, 'color: #01a699', 'color: #f99137', 'color: #f99137', 'color: #a94920', 'color: #00a7f8', 'color: #3b539a', 'color: #32db64', 'color: #00c59e', 'color: #3b539a', 'color: #488aff');
    }
    let verticalStyle = { height,
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 0,
          margin: 0,
          bottom: 0,
          right: 0,
          bottom: 0,
          padding: 0,
          flex: 1 },
        horizontalStyle = { width,
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          margin: 0,
          bottom: 10,
          left: 0,
          right: 0,
          padding: 0,
          flex: 1 };
    if (horizontal === true)PaginationContainerStyle = horizontalStyle;
    else if (paginationStyle)PaginationContainerStyle = paginationStyle;
    else PaginationContainerStyle = verticalStyle;
    return (
        <View style={[
        PaginationContainerStyle,
        containerStyle
      ]}
      >
          <View style={[
          { flex: 1,
            marginTop: horizontal === true ? 0 : 20,
            marginBottom: horizontal === true ? 0 : 20,
            marginLeft: horizontal === true ? 5 : 0,
            marginRight: horizontal === true ? 5 : 0,
            width: horizontal === true ? width : 40,
            height: horizontal === false ? height : 30,
            flexDirection: horizontal == true ? 'row' : 'column',
            justifyContent: 'center',
            alignItems: 'center' }
        ]}
        >
                <Dot
            StartDot {...this.props} onPress={this.onStartDotPress} styles={[
              dotStyle,
              startDotStyle
            ]}
          />
                {/* {showStartingJumpDot &&
    <Dot jumpItems={flatListPaginationItems} endingJumpSize={(endingJumpSize)?endingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
  } */}
          {flatListPaginationItems.map((item, i) => {
            LayoutAnimation.configureNext(dotAnimation);
            return (<View key={i} style={{flex:1}}>
              {!DotComponent &&
                <Dot {...this.props} key={`paginationDot${i}`} item={item} />
              }
              {DotComponent &&
                <DotComponent {...this.props} key={`paginationDot${i}`} />
              }
            </View>)
          })}
                {/* {showEndingJumpDot &&
      <Dot jumpItems={flatListPaginationItems} startingJumpSize={(startingJumpSize)?startingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
    } */}
          <Dot
                EndDot {...this.props} onPress={this.onEndDotPress} styles={[
              dotStyle,
              endDotStyle
            ]}
          />
        </View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
  }
});
Pagination.defaultProps = {
// ContainerStyle:{flex: 1,backgroundColor:"red",width,height:null},
  containerStyle: null,
  // TextStyle:{color:"rgba(0,0,0,0.5)",textAlign: "center",},
  paginationVisibleItems: [],
  paginationItems: [],
  horizontal: false,
  pageRangeDisplayed: 10,
  hideEmptyDots: false,
  activeItemIndex: null,
  hideEmptyDotComponents: false,
  paginationItemPadSize: 3,
  dotAnimation: LayoutAnimation.Presets.easeInEaseOut
};
// NOT WORKING (I dont know why)
Pagination.propTypes = {
  paginationItems: PropTypes.array,
  visableItemList: PropTypes.array
};
export default Pagination;
export { Icon, Dot };
