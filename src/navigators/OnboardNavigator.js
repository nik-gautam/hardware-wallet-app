import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigator } from "./TabNavigator";
import CoverWithAccount from "../screens/onboarding/CoverWithAccount";
import Cover from "../screens/onboarding/Cover";
import EnterPin from "../screens/wallet-pin/EnterPin";
import RecoveryNavigator from "./RecoveryNavigator";

const Stack = createNativeStackNavigator();

const OnboardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Back",
        headerTitleStyle: {
          fontFamily: "inter-regular",
          fontSize: 18,
        },
      }}>
      <Stack.Screen
        name="CoverWithAccount"
        component={CoverWithAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EnterPin" component={EnterPin} />
      <Stack.Screen
        name="RecoveryNavigator"
        component={RecoveryNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardNavigator;
