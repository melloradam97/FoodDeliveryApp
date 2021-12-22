import React from "react";
import { TakeawaysPage } from "../takeaways/pages/takeaways";

import { createStackNavigator } from "@react-navigation/stack";

export const TakeawayStack = createStackNavigator();

export const TakeawaysNavigator = () => {
  return (
    <TakeawayStack.Navigator>
      <TakeawayStack.Screen name="Takeaways" component={TakeawaysPage} />
    </TakeawayStack.Navigator>
  );
};
