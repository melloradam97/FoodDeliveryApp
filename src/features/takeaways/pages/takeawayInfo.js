import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { ListItem } from "react-native-elements";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

import { Takeaway } from "../components/takeaway";

export const TakeawayInfoPage = ({ route }) => {
  const [foodOpen, setFoodOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);
  const { takeaway } = route.params;

  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <Takeaway takeaway={takeaway} />
      <ScrollView>
        <ListItem.Accordion
          isExpanded={foodOpen}
          onPress={() => setFoodOpen(!foodOpen)}
        ></ListItem.Accordion>
        <ListItem.Accordion
          isExpanded={drinksOpen}
          onPress={() => setDrinksOpen(!drinksOpen)}
        ></ListItem.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};
