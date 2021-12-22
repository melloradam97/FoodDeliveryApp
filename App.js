import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TakeawaysPage } from "./src/features/takeaways/pages/takeaways";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { TakeawaysContextProvider } from "./src/services/takeaways/takeawayContext";

const Tab = createBottomTabNavigator();

const Settings = () => {
  return <Text>Settings Page</Text>;
};

const Map = () => {
  return <Text>Map Page</Text>;
};

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <TakeawaysContextProvider>
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
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen
                name="Map"
                component={Map}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Takeaways"
                component={TakeawaysPage}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </TakeawaysContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
