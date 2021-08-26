import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import BackHeader from "../../components/backHeader";

export default class NameListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: this.props.route.params.data,
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <BackHeader
          title={this.state.title}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <Text> List </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
