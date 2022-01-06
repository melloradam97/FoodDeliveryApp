import React from "react";
import { ImageBackground, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "react-native-paper";

export const UserPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/kristina-bratko-nP11TkjxJ7s-unsplash.jpg")}
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`rounded-xl p-8 mx-auto`}>
        <Text style={tw`text-3xl text-red-500`}>Name Pending</Text>
        <Button
          mode="contained"
          color="#facc15"
          style={tw`px-10 py-2 mt-4`}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          mode="contained"
          color="#facc15"
          style={tw`mt-4 px-10 py-2`}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  );
};
