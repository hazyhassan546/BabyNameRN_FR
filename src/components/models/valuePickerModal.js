import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../../helpers/commonHelpers/helpers";
import { Icon } from "react-native-elements";
import images from "../../common/images";
import Modal from "react-native-modal";

export default class ValuePickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.onPress();
          }}
          style={styles.container}
        >
          <Text>{"By Religion"}</Text>
          <Image source={images.down} style={styles.downArrow} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(120),
    height: GetOptimalHieght(33),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
    ...commonStyle.elevatedShadow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  downArrow: {
    width: GetOptimalHieght(15),
    height: GetOptimalHieght(15),
    resizeMode: "contain",
  },
});
