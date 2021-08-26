import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import AlphabetCard from "../../components/cards/alphabetCard";
import OptionsCard from "../../components/cards/optionsCard";
import ReligionCard from "../../components/cards/religionCard";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../../helpers/commonHelpers/helpers";

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

const Alphabets = [
  {
    key: "A",
    color: COLORS.REDISH,
  },
  {
    key: "B",
    color: COLORS.PINKISH,
  },
  {
    key: "C",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "D",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "E",
    color: COLORS.REDISH,
  },
  {
    key: "F",
    color: COLORS.PINKISH,
  },
  {
    key: "G",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "H",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "I",
    color: COLORS.REDISH,
  },
  {
    key: "J",
    color: COLORS.PINKISH,
  },
  {
    key: "K",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "L",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "M",
    color: COLORS.REDISH,
  },
  {
    key: "N",
    color: COLORS.PINKISH,
  },
  {
    key: "O",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "P",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "Q",
    color: COLORS.REDISH,
  },
  {
    key: "R",
    color: COLORS.PINKISH,
  },
  {
    key: "S",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "T",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "U",
    color: COLORS.REDISH,
  },
  {
    key: "V",
    color: COLORS.PINKISH,
  },
  {
    key: "W",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "X",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "Y",
    color: COLORS.REDISH,
  },
  {
    key: "Z",
    color: COLORS.PINKISH,
  },
];

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

          {/* {data.map((item, i) => {
            return (
              <ReligionCard key={i} title={item.title} image={item.image} />
            );
          })} */}
          {/* <FlatList
            keyExtractor={(item) => item.key}
            data={Alphabets}
            contentContainerStyle={{
              paddingHorizontal: GetOptimalWidth(35),
            }}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({ item }) => {
              return <AlphabetCard keyword={item.key} color={item.color} />;
            }}
          /> */}
          <FlatList
            ListHeaderComponent={<GenderOptions />}
            keyExtractor={(item) => item.title}
            data={typesData}
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => {
              return <OptionsCard data={item} />;
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
