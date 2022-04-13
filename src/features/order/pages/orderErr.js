import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";

export const OrderErrPage = () => {
  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <View style={tw`m-auto items-center flex`}>
        <Text>There was a problem processing your order</Text>
      </View>
    </SafeAreaView>
  );
};
