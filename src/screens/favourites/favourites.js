import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ImageBackground,
} from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import NameListCard from "../../components/cards/nameListCard";
import GenderOptions from "../../components/genderOptions";
import ValuePickerModal from "../../components/models/valuePickerModal";
import SearchBar from "../../components/searchBar";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

const DATA = [
  {
    title: "A",
    data: [
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "B",
    data: [
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "C",
    data: [
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "D",
    data: [
      {
        name: "Doe",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Doe",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "E",
    data: [
      {
        name: "Elia",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Elia",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
];

const Item = ({ item, index, gotoDetails }) => (
  <NameListCard
    item={item}
    index={index}
    gotoDetails={() => {
      gotoDetails();
    }}
  />
);
export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: "My Favorites"
    });
  }

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
        <BackHeader
          title={this.state.title}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        {/* <View
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
        </View> */}
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <Item
              item={item}
              index={index}
              gotoDetails={() => {
                this.props.navigation.navigate("NameDetails", { data: "Ali" });
              }}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerBox}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  headerBox: {
    fontSize: scaledFontSize(14),
    backgroundColor: COLORS.BLACK,
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderRadius: GetOptimalHieght(20),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: GetOptimalWidth(10),
    marginVertical: GetOptimalHieght(10),
  },
  header: {
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
  },
});
