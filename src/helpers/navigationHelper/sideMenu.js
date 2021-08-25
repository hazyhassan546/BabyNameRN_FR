import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class SideMenu extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={() => {
            this.props.navigation.navigate("WalkThrough");
          }}
        >
          <Text>Touch me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
