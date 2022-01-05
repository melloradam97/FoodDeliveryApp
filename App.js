import "react-native-gesture-handler";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { TakeawaysContextProvider } from "./src/services/takeaways/takeawayContext";
import { Navigation } from "./src/features/navigation/indexNavigation";
import { AuthContextProvider } from "./src/services/auth/authContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <LocationContextProvider>
          <TakeawaysContextProvider>
            <Navigation />
          </TakeawaysContextProvider>
        </LocationContextProvider>
      </AuthContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
