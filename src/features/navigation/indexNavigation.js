import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./appNavigation";
import { UserNavigation } from "./userNavigation";
import { AuthContext } from "../../services/auth/authContext";

export const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuth ? <AppNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};
