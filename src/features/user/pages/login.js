import React from "react";
import { ImageBackground, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export const LoginPage = () => {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require("../../../../assets/kristina-bratko-nP11TkjxJ7s-unsplash.jpg")}
        resizeMode="cover"
        style={tw`flex-1 justify-center`}
      />
    </View>
  );
};
