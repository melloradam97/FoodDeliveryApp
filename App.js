import "react-native-gesture-handler";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Navigation } from "./src/features/navigation/indexNavigation";
import { AuthContextProvider } from "./src/services/auth/authContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
