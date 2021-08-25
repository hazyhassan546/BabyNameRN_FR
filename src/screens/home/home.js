import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../../helpers/commonHelpers/helpers";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <HomeHeader
            openDrawer={() => this.props.navigation.openDrawer()}
            gotoHome={() => {
              this.props.navigation.navigate("Home");
            }}
            like={() => {
              alert("Like");
            }}
            share={() => {
              alert("Share");
            }}
          />
          {/* <BackHeader
            onBackPress={() => {}}
            gotoHome={() => {
              this.props.navigation.navigate("Home");
            }}
          /> */}
          <GenderOptions />
        </View>
      </SafeAreaView>
    );
  }
}
