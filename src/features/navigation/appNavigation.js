import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { TakeawaysNavigation } from "./takeawayNavigation";
import { ProfilePage } from "../profile/pages/profile";
import { MapPage } from "../map/pages/map";
import { OrderNavigation } from "./orderNavigation";

import { LocationContextProvider } from "../../services/location/locationContext";
import { TakeawaysContextProvider } from "../../services/takeaways/takeawayContext";
import { OrderContextProvider } from "../../services/order/orderContext";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <LocationContextProvider>
      <TakeawaysContextProvider>
        <OrderContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Takeaways") {
                  iconName = "fast-food-outline";
                } else if (route.name === "Profile") {
                  iconName = "person-outline";
                } else if (route.name === "Map") {
                  iconName = "md-map-outline";
                } else if (route.name === "Orders") {
                  iconName = "md-cart-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#9333EA",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Takeaways"
              component={TakeawaysNavigation}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={MapPage}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Orders"
              component={OrderNavigation}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </OrderContextProvider>
      </TakeawaysContextProvider>
    </LocationContextProvider>
  );
};
