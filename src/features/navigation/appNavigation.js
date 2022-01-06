import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { TakeawaysNavigator } from "./takeawayNavigation";
import { MapPage } from "../map/pages/map";
import { AuthContext } from "../../services/auth/authContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { TakeawaysContextProvider } from "../../services/takeaways/takeawayContext";

const Tab = createBottomTabNavigator();

const Settings = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Text>Settings Page</Text>
      <Button title="Logout" onPress={() => logout()} />
    </>
  );
};

export const AppNavigation = () => {
  return (
    <LocationContextProvider>
      <TakeawaysContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Takeaways") {
                iconName = "fast-food-outline";
              } else if (route.name === "Settings") {
                iconName = "md-settings-outline";
              } else if (route.name === "Map") {
                iconName = "md-map-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Takeaways"
            component={TakeawaysNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Map"
            component={MapPage}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </TakeawaysContextProvider>
    </LocationContextProvider>
  );
};
