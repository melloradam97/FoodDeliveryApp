import React, { useState, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationContext";

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchedKeyword, setSearchedKeyword] = useState(keyword);

  return (
    <View style={tw`p-4`}>
      <Searchbar
        placeholder="Enter a City..."
        value={searchedKeyword}
        onSubmitEditing={() => {
          search(searchedKeyword);
        }}
        onChangeText={(text) => {
          setSearchedKeyword(text);
        }}
      />
    </View>
  );
};
