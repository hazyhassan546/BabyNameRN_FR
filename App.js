import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./src/common/colors";
import Navigator from "./src/helpers/navigationHelper/navigationHelper";
import SplashScreen from "react-native-splash-screen";

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

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
