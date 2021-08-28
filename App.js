import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./src/common/colors";
import Navigator from "./src/helpers/navigationHelper/navigationHelper";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar animated={true} hidden={true} />
        <Navigator />
      </View>
    );
  }
}

export default App;
