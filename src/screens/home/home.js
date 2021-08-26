import React, { Component } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import images from "../../common/images";
import OptionsCard from "../../components/cards/optionsCard";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";
import ValuePickerModal from "../../components/models/valuePickerModal";
import SearchBar from "../../components/searchBar";
import { GetOptimalHieght } from "../../helpers/commonHelpers/helpers";

const typesData = [
  {
    title: "Name of boys",
    image: images.boy,
  },
  {
    title: "Name of girls",
    image: images.girl,
  },
  {
    title: "Name of both",
    image: images.both,
  },
  {
    title: "Search Alphabetic",
    image: images.letters,
  },
  {
    title: "Search Religious",
    image: images.book,
  },
  {
    title: "Trending names",
    image: images.trend,
  },
];
export default class Home extends Component {
  selectOption = (option) => {
    switch (option.title) {
      case "Name of boys":
        this.props.navigation.navigate("NameListing", { data: option.title });
        break;
      case "Name of girls":
        this.props.navigation.navigate("NameListing", { data: option.title });
        break;
      case "Name of both":
        this.props.navigation.navigate("NameListing", { data: option.title });
        break;
      case "Search Alphabetic":
        this.props.navigation.navigate("ByAlphabets");
        break;
      case "Search Religious":
        this.props.navigation.navigate("ByReligion");
        break;
      case "Trending names":
        // this.props.navigation.navigate("Home");
        break;
      default:
        break;
    }
  };

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
          ListHeaderComponent={
            <View
              style={{
                alignItems: "center",
                marginBottom: GetOptimalHieght(30),
              }}
            >
              <GenderOptions />
              <View style={{ flexDirection: "row" }}>
                <ValuePickerModal
                  onPress={() => {
                    this.props.navigation.navigate("ByReligion");
                  }}
                />
                <SearchBar />
              </View>
            </View>
          }
          keyExtractor={(item) => item.title}
          data={typesData}
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <OptionsCard
                data={item}
                onPress={() => this.selectOption(item)}
              />
            );
          }}
        />
      </ImageBackground>
    );
  }
}
