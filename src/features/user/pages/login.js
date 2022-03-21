import React, { useState, useContext } from "react";
// import { TextInput, Button } from "react-native-paper";
import { Input, Button } from "react-native-elements";
import { AuthContext } from "../../../services/auth/authContext";
import { ImageBackground, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { err, login } = useContext(AuthContext);
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require("../../../../assets/photo-1615800098779-1be32e60cca3.jpeg")}
        resizeMode="cover"
        style={tw`flex-1 justify-center`}
      >
        <View style={tw`rounded-xl p-8 mx-auto`}>
          <Input
            labelStyle={tw`text-purple-600`}
            containerStyle={tw`w-72`}
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(username) => setEmail(username)}
          />
          <Input
            labelStyle={tw`text-purple-600`}
            containerStyle={tw`w-72`}
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(pass) => setPassword(pass)}
          />
          {err && <Text style={tw`mt-4 text-red-700`}>{err}</Text>}
          <Button
            buttonStyle={tw`bg-purple-600`}
            style={tw`mt-4 w-48 mx-auto`}
            color="#facc15"
            mode="contained"
            title="Login"
            onPress={() => login(email, password)}
          />
        </View>
        <Button
          buttonStyle={tw`bg-purple-600`}
          style={tw`mt-4 w-24 mx-auto`}
          color="#facc15"
          mode="contained"
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
    </View>
  );
};
