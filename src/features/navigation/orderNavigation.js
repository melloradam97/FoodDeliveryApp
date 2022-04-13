import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

export const OrderStack = createStackNavigator();

import { OrderPage } from "../order/pages/order";
import { OrderProPage } from "../order/pages/orderPro";
import { OrderErrPage } from "../order/pages/orderErr";

export const OrderNavigation = () => {
  return (
    <OrderStack.Navigator headermode="none">
      <OrderStack.Screen
        name="Order"
        component={OrderPage}
        options={{ headerShown: false }}
      />
      <OrderStack.Screen
        name="OrderProcessed"
        component={OrderProPage}
        options={{ headerShown: false }}
      />
      <OrderStack.Screen
        name="OrderError"
        component={OrderErrPage}
        options={{ headerShown: false }}
      />
    </OrderStack.Navigator>
  );
};
