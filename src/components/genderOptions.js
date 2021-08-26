import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import COLORS from "../common/colors";
import { commonStyle } from "../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../helpers/commonHelpers/helpers";
import CheckBox from "react-native-check-box";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReligionCard from "./cards/religionCard";

const data = [
  {
    lable: "Boy",
    id: 0,
  },
  {
    lable: "Girl",
    id: 1,
  },
  {
    lable: "Both",
    id: 2,
  },
];

export default class GenderOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  selectOption = (i) => {
    this.setState({
      selectedIndex: i,
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          {data.map((obj, i) => {
            return (
              <CheckBox
                key={i}
                style={{ padding: 10, width: 120 }}
                onClick={() => {
                  this.selectOption(i);
                }}
                isChecked={obj.id == this.state.selectedIndex}
                rightText={obj.lable}
                rightTextStyle={styles.text}
                checkedImage={
                  <TouchableOpacity
                    style={[styles.wrap, commonStyle.elevatedShadow]}
                  ></TouchableOpacity>
                }
                unCheckedImage={
                  <TouchableOpacity
                    style={[styles.unselectedWrap, commonStyle.elevatedShadow]}
                  ></TouchableOpacity>
                }
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 30,
    paddingVertical: GetOptimalHieght(30),
  },
  wrap: {
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderWidth: 5,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.APP_BLUE,
    borderRadius: GetOptimalHieght(20),
  },
  unselectedWrap: {
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderWidth: 0,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(20),
  },
  text: {
    fontSize: scaledFontSize(20),
    color: COLORS.BLACK,
  },
});
