import React, { useState, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import { List } from "react-native-paper";
import { Button } from "react-native-elements";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

import { Takeaway } from "../components/takeaway";
import { OrderContext } from "../../../services/order/orderContext";

export const TakeawayInfoPage = ({ route, navigation }) => {
  const [bitesOpen, setBitesOpen] = useState(false);
  const [mainsOpen, setMainsOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);
  const { takeaway } = route.params;

  const { addToOrder } = useContext(OrderContext);

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
          <List.Item title="Macaroni Cheese (with GF Pasta and GF Flour)" />
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
      <Button
        buttonStyle={tw`bg-purple-600`}
        style={tw`mt-4 w-48 mx-auto mb-5`}
        color="#facc15"
        title="Order GF Burger - £8"
        onPress={() => {
          addToOrder({ item: "burger", price: 8000 }, takeaway);
          navigation.navigate("Orders");
        }}
      />
    </SafeAreaView>
  );
};
