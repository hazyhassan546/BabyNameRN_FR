import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../common/colors";
import images from "../common/images";
import { Icon } from "react-native-elements";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../helpers/commonHelpers/helpers";
import { commonStyle } from "../common/styles";

export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.openDrawer} style={[styles.touchableHide,{position: "absolute", left:20}]}>
          <Icon name="menu" type="MaterialIcons" color={COLORS.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.gotoHome} style={styles.buttonStyle}>
          <Image source={images.babyImage} style={styles.imageStyle} />
        </TouchableOpacity>
        <View style={[styles.buttonRow,{position: "absolute", right:20}]}>
          <TouchableOpacity onPress={this.props.like} style={styles.touchable}>
            <Icon size={20} name="like1" type="antdesign" color="#517fa4" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.share} style={styles.touchable}>
            <Icon size={20} name="share" type="SimpleLineIcons" color="#517fa4" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.APP_BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: GetOptimalHieght(10),
    paddingHorizontal: GetOptimalWidth(20),
  },
  imageStyle: {
    width: GetOptimalHieght(66),
    height: GetOptimalHieght(66),
  },
  buttonStyle: {
    width: GetOptimalHieght(80),
    height: GetOptimalHieght(80),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(40),
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: GetOptimalHieght(15),
    marginHorizontal:GetOptimalWidth(5),
    ...commonStyle.elevatedShadow
  },
  touchableHide: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: GetOptimalHieght(15),
  },
  buttonRow: {
    flexDirection: "row",
  },
});
