import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { TakeawayPage } from "./src/features/takeaways/pages/takeaways";

export default function App() {
  return (
    <>
      <TakeawayPage />
      <ExpoStatusBar style="auto" />
    </>
  );
}
