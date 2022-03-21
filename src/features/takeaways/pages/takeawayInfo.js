import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { List } from "react-native-paper";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

import { Takeaway } from "../components/takeaway";

export const TakeawayInfoPage = ({ route }) => {
  const [bitesOpen, setBitesOpen] = useState(false);
  const [mainsOpen, setMainsOpen] = useState(false);
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
          title="Gluten Free Bites"
          left={(props) => (
            <List.Icon style={tw``} {...props} icon="food-drumstick" />
          )}
          expanded={bitesOpen}
          onPress={() => setBitesOpen(!bitesOpen)}
        >
          <List.Item title="Doughballs (with GF Dough)" />
          <List.Item title="Fries (Dedicated Frier)" />
          <List.Item title="Garlic Bread (with GF Dough)" />
        </List.Accordion>
        <List.Accordion
          title="Gluten Free Mains"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={mainsOpen}
          onPress={() => setMainsOpen(!mainsOpen)}
        >
          <List.Item title="Cheeseburger (with GF Bun)" />
          <List.Item title="Pepperoni Pizza (with GF Dough)" />
          <List.Item title="Macaroni Cheese (with GF Pasta)" />
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
