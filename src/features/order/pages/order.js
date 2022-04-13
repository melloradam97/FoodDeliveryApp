import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import tw from "tailwind-react-native-classnames";
import { Input, ListItem } from "react-native-elements";
import { Text } from "react-native";
import { OrderContext } from "../../../services/order/orderContext";
import { Takeaway } from "../../takeaways/components/takeaway";
import { Button } from "react-native-elements";
import axios from "axios";

export const OrderPage = ({ navigation }) => {
  const { order, takeaway, emptyTheOrder } = useContext(OrderContext);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [expiryMonth, setExpiryMonth] = useState(null);
  const [expiryYear, setExpiryYear] = useState(null);
  const [securityNumber, setSecurityNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitPayment = () => {
    setLoading(true);
    axios
      .post("https://food-delivery-app-backend.herokuapp.com/api/cardinfo", {
        name: name,
        number: cardNumber,
        expiryMonth,
        expiryYear,
        securityNumber,
        orderTotal: total / 1000,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        emptyTheOrder();
        navigation.navigate("OrderProcessed");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        emptyTheOrder();
        navigation.navigate("OrderError");
      });
  };

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
      {loading && (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../../../../assets/13679-fast-food-mobile-app-loading.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
      )}
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
        <Input
          labelStyle={tw`text-purple-600 mt-2`}
          containerStyle={tw`w-72 ml-3`}
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="none"
        />
        <Input
          labelStyle={tw`text-purple-600 mt-2`}
          containerStyle={tw`w-72 ml-3`}
          label="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          autoCapitalize="none"
        />
        <Input
          labelStyle={tw`text-purple-600 mt-2`}
          containerStyle={tw`w-72 ml-3`}
          label="Expiry Month"
          value={expiryMonth}
          onChangeText={(text) => setExpiryMonth(text)}
          autoCapitalize="none"
        />
        <Input
          labelStyle={tw`text-purple-600 mt-2`}
          containerStyle={tw`w-72 ml-3`}
          label="Expiry Year"
          value={expiryYear}
          onChangeText={(text) => setExpiryYear(text)}
          autoCapitalize="none"
        />
        <Input
          labelStyle={tw`text-purple-600 mt-2`}
          containerStyle={tw`w-72 ml-3`}
          label="Security Number"
          value={securityNumber}
          onChangeText={(text) => setSecurityNumber(text)}
          autoCapitalize="none"
        />
        <Button
          buttonStyle={tw`bg-purple-600`}
          style={tw`w-48 mx-auto`}
          color="#facc15"
          mode="contained"
          title="Pay Now"
          onPress={() =>
            submitPayment(
              name,
              cardNumber,
              expiryMonth,
              expiryYear,
              securityNumber,
              total
            )
          }
        />
        <Button
          buttonStyle={tw`bg-purple-600`}
          style={tw`mt-4 w-36 mx-auto mb-4`}
          color="#facc15"
          title="Clear Order"
          onPress={() => emptyTheOrder()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
