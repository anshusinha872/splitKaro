import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { Platform, StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        hidden={false}
        backgroundColor="#6774dd"
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
