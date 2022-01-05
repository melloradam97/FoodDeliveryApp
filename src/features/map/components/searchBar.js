import React, { useState, useContext, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationContext";

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchedKeyword, setSearchedKeyword] = useState(keyword);

  useEffect(() => {
    setSearchedKeyword(keyword);
  }, [keyword]);

  return (
    <View style={tw`p-4 z-50 absolute top-8 w-full`}>
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
