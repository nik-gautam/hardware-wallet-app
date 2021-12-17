import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/recovery-phase/Intro";
import Copy from "../screens/recovery-phase/Copy";
import ValidateIntro from "../screens/recovery-phase/ValidateIntro";
import Validate from "../screens/recovery-phase/Validate";
import ValidationComplete from "../screens/recovery-phase/ValidationComplete";
import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator();

const RecoveryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Back",
        headerTitleStyle: {
          fontFamily: "inter-regular",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="RecoveryIntro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RecoveryCopy" component={Copy} />
      <Stack.Screen name="RecoveryValidateIntro" component={ValidateIntro} />
      <Stack.Screen name="RecoveryValidate" component={Validate} />
      <Stack.Screen name="RecoveryComplete" component={ValidationComplete} />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RecoveryNavigator;
