import React from "react";
import { TakeawaysPage } from "../takeaways/pages/takeaways";
import { TakeawayInfoPage } from "../takeaways/pages/takeawayInfo";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

export const TakeawayStack = createStackNavigator();

export const TakeawaysNavigator = () => {
  return (
    <TakeawayStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <TakeawayStack.Screen
        name="Takeaway"
        component={TakeawaysPage}
        options={{ headerShown: false }}
      />
      <TakeawayStack.Screen
        options={{ headerShown: false }}
        name="TakeawaysInfo"
        component={TakeawayInfoPage}
      />
    </TakeawayStack.Navigator>
  );
};
