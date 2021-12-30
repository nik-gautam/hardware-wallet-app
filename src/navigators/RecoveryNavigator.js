import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/recovery-phase/Intro";
import Copy from "../screens/recovery-phase/Copy";
import ValidateIntro from "../screens/recovery-phase/ValidateIntro";
import Validate from "../screens/recovery-phase/Validate";
import { TabNavigator } from "./TabNavigator";
import Cover from "../screens/onboarding/Cover";
import PinChoice from "../screens/wallet-pin/PinChoice";
import WalletSetupSuccess from "../screens/wallet-pin/WalletSetupSuccess";
import EnterPin from "../screens/wallet-pin/EnterPin";
import RestoreIntro from "../screens/recovery-phase/RestoreIntro";
import RestoreComplete from "../screens/recovery-phase/RestoreComplete";
import RestoreValidate from "../screens/recovery-phase/RestoreValidate";
import RestoreError from "../screens/recovery-phase/RestoreError";
import OnboardNavigator from "./OnboardNavigator";

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
      }}>
      <Stack.Screen
        name="Cover"
        component={Cover}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RecoveryIntro" component={Intro} />
      <Stack.Screen name="RecoveryCopy" component={Copy} />
      <Stack.Screen name="RecoveryValidateIntro" component={ValidateIntro} />
      <Stack.Screen name="RecoveryValidate" component={Validate} />
      <Stack.Screen
        name="WalletPinChoice"
        component={PinChoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletSetupSuccess"
        component={WalletSetupSuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EnterPin" component={EnterPin} />

      <Stack.Screen name="RestoreIntro" component={RestoreIntro} />
      <Stack.Screen name="RestoreValidate" component={RestoreValidate} />
      <Stack.Screen name="RestoreError" component={RestoreError} />
      <Stack.Screen name="RestoreComplete" component={RestoreComplete} />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RecoveryNavigator;
