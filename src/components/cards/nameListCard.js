import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import Toast from "react-native-toast-message";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";
import { Icon } from "react-native-elements";
import Clipboard from "@react-native-community/clipboard";

export default class NameListCard extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <View
        style={[
          styles.item,
          {
            backgroundColor: index % 2 === 0 ? COLORS.SKY_BLUE : COLORS.WHITE,
          },
        ]}
      >
        <View style={styles.nameArea}>
          <Text style={styles.title}>{item.name}</Text>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="hearto"
              type="antdesign"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="share"
              type="SimpleLineIcons"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Clipboard.setString(
                "Name: " + item.name + "   Meaning: " + item.meaning
              );
              Toast.show({
                type: "success",
                text1: "Name is copied to clipboard",
                text2: "Name: " + item.name + "   Meaning: " + item.meaning,
              });
            }}
          >
            <Icon
              name="copy"
              type="feather"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
        </View>

        <Text numberOfLines={2} style={styles.desc}>
          {item.meaning}
        </Text>
        <Text style={styles.desc}>{item.religion}</Text>
        <TouchableOpacity onPress={this.props.gotoDetails}>
          <Text style={styles.link}>{"(See More...)"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.SKY_BLUE,
    padding: GetOptimalHieght(20),
    ...commonStyle.elevatedShadow,
  },
  title: {
    fontSize: scaledFontSize(20),
    width: GetOptimalWidth(220),
    color: COLORS.BLACK,
  },
  desc: {
    fontSize: scaledFontSize(13),
    width: GetOptimalWidth(260),
    color: COLORS.BLACK,
  },
  link: {
    color: "#1592E6",
  },
  nameArea: {
    flexDirection: "row",
    marginBottom: GetOptimalHieght(20),
  },
  button: {
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    ...commonStyle.elevatedShadow,
    borderRadius: GetOptimalHieght(20),
    marginHorizontal: GetOptimalWidth(5),
  },
});
