import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./src/common/colors";
import Navigator from "./src/helpers/navigationHelper/navigationHelper";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} hidden={true} />
      <Navigator />
    </View>
  );
}

export default App;
