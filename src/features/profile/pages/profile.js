import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Avatar, List } from "react-native-paper";
import { AuthContext } from "../../../services/auth/authContext";

export const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <SafeAreaView
        style={tw`flex-auto ${
          StatusBar.currentHeight &&
          `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
        }`}
      >
        <Text style={tw`mx-auto mt-10 text-xl text-purple-600`}>
          {user.email}
        </Text>
        <List.Section>
          <List.Item
            style={tw`p-2`}
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={logout}
          />
        </List.Section>
      </SafeAreaView>
    </>
  );
};
