import React from "react";
import { UserPage } from "../user/pages/user";
import { LoginPage } from "../user/pages/login";
import { RegisterPage } from "../user/pages/register";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const UserNavigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Primary" component={UserPage} />
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="Register" component={RegisterPage} />
  </Stack.Navigator>
);
