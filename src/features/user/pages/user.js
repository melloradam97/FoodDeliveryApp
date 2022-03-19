import React from "react";
import { ImageBackground, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Button } from "react-native-elements";

export const UserPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/photo-1615800098779-1be32e60cca3.jpeg")}
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`rounded-xl p-8 mx-auto`}>
        <Text style={tw`text-3xl text-blue-500`}>Name Pending</Text>
        <Button
          mode="contained"
          color="#facc15"
          style={tw`px-10 py-2 mt-4`}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          mode="contained"
          color="#facc15"
          style={tw`mt-4 px-10 py-2`}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};
