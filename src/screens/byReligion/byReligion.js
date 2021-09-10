import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import ReligionCard from "../../components/cards/religionCard";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";

const data = [
  {
    title: "Muslims names",
    image: images.muslim,
  },
  {
    title: "Christian names",
    image: images.christian,
  },
  {
    title: "Hindu's names",
    image: images.hindu,
  },
  {
    title: "Sikhism names",
    image: images.sikh,
  },
  {
    title: "Jewish names",
    image: images.jews,
  },
];
export default class ByReligion extends Component {
  render() {
    return (
      <ImageBackground
        source={images.home}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
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

        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <ReligionCard
                title={item.title}
                image={item.image}
                onPress={() => {
                  this.props.navigation.navigate("NameListing", {
                    data: "By Religion",
                  });
                }}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<GenderOptions {...this.props} />}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
