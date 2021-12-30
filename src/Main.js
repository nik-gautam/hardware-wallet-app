import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import OnboardNavigator from "./navigators/OnboardNavigator";
import RecoveryNavigator from "./navigators/RecoveryNavigator";

const Main = () => {
  let { isLoggedIn } = useSelector((state) => state.wallet);

  return (
    <NavigationContainer>
      {isLoggedIn ? <OnboardNavigator /> : <RecoveryNavigator />}
    </NavigationContainer>
  );
};

export default Main;
