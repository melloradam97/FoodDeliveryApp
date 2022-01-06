import React, { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import { AuthContext } from "../../../services/auth/authContext";
import { ImageBackground, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const { err, register } = useContext(AuthContext);
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require("../../../../assets/kristina-bratko-nP11TkjxJ7s-unsplash.jpg")}
        resizeMode="cover"
        style={tw`flex-1 justify-center`}
      >
        <View style={tw`rounded-xl p-8 mx-auto`}>
          <TextInput
            style={tw`w-72`}
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(username) => setEmail(username)}
          />
          <TextInput
            style={tw`w-72 mt-4`}
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(pass) => setPassword(pass)}
          />
          <TextInput
            style={tw`w-72 mt-4`}
            label="Check Password"
            value={rPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(pass) => setRPassword(pass)}
          />
          {err && <Text style={tw`mt-4 text-red-700`}>{err}</Text>}
          <Button
            style={tw`mt-4`}
            color="#facc15"
            mode="contained"
            onPress={() => register(email, password, rPassword)}
          >
            Register
          </Button>
        </View>
        <Button
          style={tw`mt-4 mx-auto`}
          color="#facc15"
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </ImageBackground>
    </View>
  );
};
