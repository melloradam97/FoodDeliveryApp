import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "react-native-elements";

export const UserPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/whitebg.png")}
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`rounded-xl p-8 mx-auto`}>
        <Image
          style={tw` h-56 w-56 mx-auto`}
          source={require("../../../../assets/logo.png")}
        />
        <Button
          buttonStyle={tw`bg-purple-600`}
          mode="contained"
          containerStyle={tw`px-10 py-2 mt-4`}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          buttonStyle={tw`bg-purple-600`}
          mode="contained"
          style={tw`mt-4 px-10 py-2`}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};
