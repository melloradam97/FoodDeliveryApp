import "react-native-gesture-handler";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { TakeawaysContextProvider } from "./src/services/takeaways/takeawayContext";
import { Navigation } from "./src/features/navigation/indexNavigation";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <TakeawaysContextProvider>
          <Navigation />
        </TakeawaysContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
