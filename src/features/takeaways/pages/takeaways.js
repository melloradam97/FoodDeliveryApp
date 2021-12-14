import React from "react";
import tw from "tailwind-react-native-classnames";
import { Takeaway } from "../components/takeaway";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

export const TakeawayPage = () => {
  return (
    <SafeAreaView
      style={tw`flex ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <View style={tw`p-4`}>
        <Searchbar />
      </View>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
        ]}
        renderItem={() => <Takeaway />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={tw`p-4`}
      />
    </SafeAreaView>
  );
};
