import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem } from "react-native-elements";
import { CardInput } from "../components/cardInput";
import { Text } from "react-native";
import { OrderContext } from "../../../services/order/orderContext";
import { Takeaway } from "../../takeaways/components/takeaway";

export const OrderPage = () => {
  const { order, takeaway } = useContext(OrderContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!order.length) {
      setTotal(0);
      return;
    }

    const newTotal = order.reduce((a, { price }) => {
      return (a += price);
    }, 0);
    setTotal(newTotal);
  }, [order]);

  if (!order.length || !takeaway) {
    return (
      <SafeAreaView
        style={tw`flex-auto ${
          StatusBar.currentHeight &&
          `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
        }`}
      >
        <View style={tw`m-auto items-center flex`}>
          <Text>You currently have no order!</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={tw`flex-auto ${
        StatusBar.currentHeight &&
        `mt-${Math.trunc(StatusBar.currentHeight / 3)}`
      }`}
    >
      <Takeaway takeaway={takeaway} />
      <ScrollView>
        <Text style={tw`ml-5 my-2 font-bold text-base`}>Your Order</Text>
        <ListItem.Content style={tw`ml-5 my-2`}>
          {order.map(({ price, item }) => {
            return (
              <ListItem.Title>
                <Text>{`${item} - £${price / 1000}`}</Text>
              </ListItem.Title>
            );
          })}
        </ListItem.Content>
        <Text style={tw`ml-5 my-2 font-bold text-base`}>
          Order Price: £{total / 1000}
        </Text>
        <CardInput />
      </ScrollView>
    </SafeAreaView>
  );
};
