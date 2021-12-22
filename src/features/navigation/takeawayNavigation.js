import React from "react";
import { TakeawaysPage } from "../takeaways/pages/takeaways";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";

export const TakeawayStack = createStackNavigator();

export const TakeawaysNavigator = () => {
  return (
    <TakeawayStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <TakeawayStack.Screen
        name="Takeaways"
        component={TakeawaysPage}
        options={{ headerShown: false }}
      />
      <TakeawayStack.Screen
        options={{ headerShown: false }}
        name="TakeawaysInfo"
        component={() => <Text>Info init</Text>}
      />
    </TakeawayStack.Navigator>
  );
};
