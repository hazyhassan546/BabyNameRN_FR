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

const Item = ({ item, index, gotoDetails }) => (
  <NameListCard
    item={item}
    index={index}
    gotoDetails={() => {
      gotoDetails();
    }}
  />
);
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
        <View
          style={{
            alignItems: "center",
            marginBottom: GetOptimalHieght(30),
          }}
        >
          <GenderOptions {...this.props} />
          <View style={{ flexDirection: "row" }}>
            <ValuePickerModal
              {...this.props}
              onPress={() => {
                this.props.navigation.navigate("ByReligion");
              }}
            />
            <SearchBar {...this.props} />
          </View>
        </View>
        <SectionList
          sections={this.props?.namesData?.namesList}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return <Text>ello</Text>;
          }}
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
              <Text style={styles.header}>{title.toUpperCase()}</Text>
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
