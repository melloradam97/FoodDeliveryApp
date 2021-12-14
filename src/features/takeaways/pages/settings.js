import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView, Text, StatusBar } from "react-native";

export const SettingsPage = () => {
  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <Text>Settings Page</Text>
    </SafeAreaView>
  );
};
