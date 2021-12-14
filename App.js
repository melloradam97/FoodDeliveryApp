import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TakeawaysPage } from "./src/features/takeaways/pages/takeaways";
import { MapPage } from "./src/features/takeaways/pages/map";
import { SettingsPage } from "./src/features/takeaways/pages/settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
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
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Map" component={MapPage} />
          <Tab.Screen name="Takeaways" component={TakeawaysPage} />
          <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}
