/**
 * @author garrettmac <garrett@vyga.io> (http://vyga.io)
 * @version 1.0.4
 * @module ReactNativePagination (https://github.com/garrettmac/react-native-pagination)
 */
import React from "react";
import {
  Dimensions,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PropTypes from "prop-types";
import Icon from "./components/Icon";
import Dot from "./components/Dot";

const { width, height } = Dimensions.get("window");
/*
 * Helper functions
 * Export default class Pagination extends Component {
 */
const sortBy = (list, key) => {
  return list
    .concat()
    .sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

const Pagination = props => {
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
    dotAnimationType,
    paginationStyle,
    pagingEnabled,
    // ShowStartingJumpDot,showEndingJumpDot,endingJumpSize,startingJumpSize,
    hideEmptyDots,
  } = props;
  paginationItems = paginationItems.map((item, i) => {
    item.paginationIndexId = i;
    item.index = i;
    item.paginationHasSeenItem = false;
    item.paginationHasPressedItem = false;
    item.paginationSelectedItem = false;
    return item;
  });
  // PaginationVisibleItemsIndexList this list of index that you want to remove or you'll see two active icon buttons
  const paginationVisibleItemsIndexList = paginationVisibleItems.map(
    (i) => i.index
  );
  if (pagingEnabled)
    if (paginationVisibleItemsIndexList.length > 1) {
      // Fix issue where it says two visable list items are active when only one should be
      paginationVisibleItems = paginationVisibleItems.map((o) => {
        if (o.index === Math.min(...paginationVisibleItemsIndexList))
          return {
            index: o?.index,
            key: o?.key,
            item: o?.item ?? {},
            isViewable: false,
          };
        return o;
      });
    }
  // Gets max and min pads. should look something like [0, -1, -2, 2, 3, 4] if [0,1] are viewable and paginationItemPadSize is 3
  const getVisibleArrayIndexes = (
    paginationVisibleItems,
    paginationVisibleItemsIndexList,
    paginationItemPadSize
  ) => {
    const preIniquePaddedIndexList = [
      ...Array.from(
        { length: paginationItemPadSize },
        (_, i) => Math.min(...paginationVisibleItemsIndexList) - (i + 1)
      ),
      ...Array.from(
        { length: paginationItemPadSize },
        (_, i) => Math.max(...paginationVisibleItemsIndexList) + (i + 1)
      ),
    ];
    const uniquePaddedIndexList = preIniquePaddedIndexList.map((num, i) => {
      if (num < 0)
        return Math.max(...paginationVisibleItemsIndexList) + (num *= -1);
      return num;
    });
    return [...new Set(uniquePaddedIndexList)];
  };
  const paginationVisableItemsIndexArray = getVisibleArrayIndexes(
    paginationVisibleItems,
    paginationVisibleItemsIndexList,
    paginationItemPadSize
  );
  const paginationVisiblePadItems = paginationVisableItemsIndexArray.map(
    (o, i) => ({
      index: paginationItems?.[o]?.paginationIndexId,
      key: paginationItems?.[o]?.paginationIndexId,
      item: paginationItems?.[o] ?? {},
      isViewable: false,
    })
  );
  const flatListPaginationItems = sortBy(
    [...paginationVisibleItems, ...paginationVisiblePadItems],
    "index"
  );
  if (debugMode) {
    const paginationItemsIndexList = paginationItems.map((i) => i.index);
    const allDotsIndexList = flatListPaginationItems.map((i) => i.index);
    const NOT_ACTIVE_DOTS_INDEXES = sortBy(
      paginationVisiblePadItems.map((i) => i.index)
    );
    const ALL_DOTS_INDEXES = flatListPaginationItems.map((i) => i.isViewable);
    const ___ = "%c __________________________________________\n";
    const ADBY = `%c all paginationVisibleItems dots:              ${allDotsIndexList} \n`;
    const ADI = `%c active paginationVisibleItems dots:           ${paginationVisibleItemsIndexList} \n`;
    const ANDI = `%c not active dots: (padding):    ${NOT_ACTIVE_DOTS_INDEXES} \n`;
    const ADI_ISVIEWABLE = `%c each "paginationVisibleItems dots" "isViewable" attribute:\n                      ${ALL_DOTS_INDEXES} \n`;
    const AID = `%c all "paginationItems"'s':       ${paginationItemsIndexList} \n`;
    console.log(
      `${
        "\n\n%cGarrett Mac's React Native Pagination" + "%c \ndebugMode: ON\n"
      }${___}${ADBY}${ADI}${ANDI}${___}${ADI_ISVIEWABLE}${___}${AID}`,
      "color: #01a699",
      "color: #f99137",
      "color: #f99137",
      "color: #a94920",
      "color: #00a7f8",
      "color: #3b539a",
      "color: #32db64",
      "color: #00c59e",
      "color: #3b539a",
      "color: #488aff"
    );
  }
  const verticalStyle = {
    height,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    margin: 0,
    bottom: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    flex: 1,
  };
  const horizontalStyle = {
    width,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    margin: 0,
    bottom: 10,
    left: 0,
    right: 0,
    padding: 0,
    flex: 1,
  };
  if (horizontal === true) PaginationContainerStyle = horizontalStyle;
  else if (paginationStyle) PaginationContainerStyle = paginationStyle;
  else PaginationContainerStyle = verticalStyle;
  return (
    <View style={[PaginationContainerStyle, containerStyle]}>
      <View
        style={[
          {
            flex: 1,
            marginTop: horizontal === true ? 0 : 20,
            marginBottom: horizontal === true ? 0 : 20,
            marginLeft: horizontal === true ? 5 : 0,
            marginRight: horizontal === true ? 5 : 0,
            width: horizontal === true ? width : 40,
            height: horizontal === false ? height : 30,
            flexDirection: horizontal == true ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Dot
          StartDot
          {...props}
          onPress={this.onStartDotPress}
          styles={[dotStyle, startDotStyle]}
        />
        {/* {showStartingJumpDot &&
  <Dot jumpItems={flatListPaginationItems} endingJumpSize={(endingJumpSize)?endingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
} */}
        {flatListPaginationItems.map((item, i) => {
          if (dotAnimation) LayoutAnimation.configureNext(dotAnimationType);
          return (
            <View key={i} style={{ flex: 1 }}>
              {!DotComponent && (
                <Dot {...props} key={`paginationDot${i}`} item={item} />
              )}
              {DotComponent && (
                <DotComponent {...props} key={`paginationDot${i}`} />
              )}
            </View>
          );
        })}
        {/* {showEndingJumpDot &&
    <Dot jumpItems={flatListPaginationItems} startingJumpSize={(startingJumpSize)?startingJumpSize:5} {...this.props} styles={[dotStyle,endDotStyle]}/>
  } */}
        <Dot
          EndDot
          {...props}
          onPress={this.onEndDotPress}
          styles={[dotStyle, endDotStyle]}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
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
  dotAnimation: true,
  dotAnimationType: LayoutAnimation.Presets.easeInEaseOut,
};
// NOT WORKING (I dont know why)
Pagination.propTypes = {
  paginationItems: PropTypes.array,
  visableItemList: PropTypes.array,
};
export default Pagination;
export { Icon, Dot };
