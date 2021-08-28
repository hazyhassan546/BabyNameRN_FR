import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

export default class DetailsCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text
            style={{
              marginBottom: GetOptimalHieght(10),
              fontSize: scaledFontSize(14),
            }}
            numberOfLines={1}
          >
            Name
          </Text>
          <Text numberOfLines={1}>Gender</Text>
          <Text numberOfLines={1}>Religion</Text>
          <Text numberOfLines={1}>Meaning</Text>
          <Text numberOfLines={1}>History</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={2}>Ali</Text>
          <Text numberOfLines={2}>Ali</Text>
          <Text numberOfLines={2}>Ali</Text>
          <Text numberOfLines={2}>Ali</Text>
          <Text numberOfLines={2}>Ali</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    paddingHorizontal: GetOptimalWidth(50),
    flexDirection: "row",
  },
  leftContainer: {
    maxWidth: GetOptimalWidth(100),
    backgroundColor: "#DDEBF2",

    ...commonStyle.elevatedShadow,
    paddingVertical: GetOptimalHieght(30),
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
    borderTopLeftRadius: GetOptimalWidth(5),
    borderBottomLeftRadius: GetOptimalWidth(5),
  },
  rightContainer: {
    width: GetOptimalWidth(200),
    backgroundColor: "#F4F4F5",
    justifyContent: "center",
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
    ...commonStyle.elevatedShadow,
    paddingVertical: GetOptimalHieght(30),
    borderTopRightRadius: GetOptimalWidth(5),
    borderBottomRightRadius: GetOptimalWidth(5),
  },
});
