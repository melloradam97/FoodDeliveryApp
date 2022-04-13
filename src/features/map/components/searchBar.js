import React, { useState, useContext, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationContext";

export const SearchBar = () => {
  const { place, search } = useContext(LocationContext);
  const [searchedPlace, setSearchedPlace] = useState(place);

  useEffect(() => {
    setSearchedPlace(place);
  }, [place]);

  return (
    <View style={tw`p-4 z-50 absolute top-8 w-full`}>
      <Searchbar
        style={tw`text-purple-600`}
        iconColor="#9333EA"
        placeholder="Enter a City..."
        value={searchedPlace}
        onSubmitEditing={() => {
          search(searchedPlace);
        }}
        onChangeText={(text) => {
          setSearchedPlace(text);
        }}
      />
    </View>
  );
};
