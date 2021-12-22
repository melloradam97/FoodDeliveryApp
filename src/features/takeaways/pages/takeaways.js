import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import tw from "tailwind-react-native-classnames";
import { Takeaway } from "../components/takeaway";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { TakeawaysContext } from "../../../services/takeaways/takeawayContext";
import { SearchBar } from "../components/searchBar";

export const TakeawaysPage = () => {
  const { takeaways, loading, error } = useContext(TakeawaysContext);
  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      {loading && (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../../../../assets/13679-fast-food-mobile-app-loading.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
      )}
      <SearchBar />
      <FlatList
        data={takeaways}
        renderItem={({ item }) => {
          return <Takeaway takeaway={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={tw`p-4`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
