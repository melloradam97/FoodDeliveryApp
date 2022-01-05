import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView, View, Text, StatusBar } from "react-native";

export const MapPage = () => {
  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <Text>Map Page</Text>
    </SafeAreaView>
  );
};
