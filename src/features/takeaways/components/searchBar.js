import React, { useState, useContext, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { Platform, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { LocationContext } from "../../../services/location/locationContext";

export const SBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchedKeyword, setSearchedKeyword] = useState(keyword);

  useEffect(() => {
    setSearchedKeyword(keyword);
  }, [keyword]);

  return (
    <View style={tw`p-2`}>
      <SearchBar
        platform="ios"
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
