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
export default class DetailsCard extends Component {
  render() {
    const { name, meaning, gender, numbers } = this.props.data;
    return (
      <View>
        <View style={styles.container}>
          <View
            style={[
              styles.leftContainer,
              {
                paddingTop: GetOptimalHieght(40),
                paddingBottom: GetOptimalHieght(10),
                borderTopLeftRadius: 10,
              },
            ]}
          >
            <Text style={styles.title}>{"Name"}</Text>
          </View>
          <View
            style={[
              styles.rightContainer,
              {
                borderTopRightRadius: 10,
                paddingTop: GetOptimalHieght(40),
                paddingBottom: GetOptimalHieght(10),
              },
            ]}
          >
            <Text style={styles.desc}>{name}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Gender</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.desc}>{gender}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Religion</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.desc}>Islam</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Meaning</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.desc}>{meaning}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={[
              styles.leftContainer,
              {
                paddingBottom: GetOptimalHieght(20),
                borderBottomLeftRadius: 10,
              },
            ]}
          >
            <Text style={styles.title}>Lucky Number</Text>
          </View>
          <View
            style={[
              styles.rightContainer,
              {
                paddingBottom: GetOptimalHieght(20),
                borderBottomRightRadius: 10,
              },
            ]}
          >
            <Text style={styles.desc}>{numbers}</Text>
          </View>
        </View>

        <View style={styles.iconArea}>
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
              Clipboard.setString("Name: " + name + "   Meaning: " + meaning);
              Toast.show({
                type: "success",
                text1: "Name is copied to clipboard",
                text2: "Name: " + name + "   Meaning: " + meaning,
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
        <TouchableOpacity
          style={styles.seeMore}
          onPress={this.props.seeRelatedNames}
        >
          <Text style={styles.link}>See related names</Text>
        </TouchableOpacity>
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
  title: {
    marginBottom: GetOptimalHieght(10),
    fontSize: scaledFontSize(14),
  },
  desc: {
    marginBottom: GetOptimalHieght(10),
    fontSize: scaledFontSize(14),
  },
  iconArea: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: GetOptimalHieght(20),
  },
  leftContainer: {
    width: GetOptimalWidth(100),
    minHeight: GetOptimalHieght(38),
    margin: 0,
    backgroundColor: "#DDEBF2",
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
  },
  rightContainer: {
    width: GetOptimalWidth(200),
    margin: 0,
    minHeight: GetOptimalHieght(38),
    backgroundColor: "#F4F4F5",
    justifyContent: "center",
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
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
  seeMore: {
    paddingHorizontal: GetOptimalWidth(40),
  },
  link: {
    color: "#1592E6",
    fontSize: scaledFontSize(14),
  },
});
