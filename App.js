import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./src/helpers/navigationHelper/navigationHelper";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
