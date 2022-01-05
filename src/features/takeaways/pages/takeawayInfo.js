import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { List } from "react-native-paper";
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
        <List.Accordion
          title="Food"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={foodOpen}
          onPress={() => setFoodOpen(!foodOpen)}
        >
          <List.Item title="Donner Kebab" />
          <List.Item title="Cheeseburger" />
          <List.Item title="Pepperoni Pizza" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup-water" />}
          expanded={drinksOpen}
          onPress={() => setDrinksOpen(!drinksOpen)}
        >
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
          <List.Item title="Sprite" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};
