import React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SendScreen from "../screens/send/SendScreen";
import FeeScreen from "../screens/send/FeeScreen";
import SummaryScreen from "../screens/send/SummaryScreen";
import TransactionCompleteScreen from "../screens/send/TransactionCompleteScreen";

const Stack = createNativeStackNavigator();

const SendNavigation = () => {
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
        name="SendScreen"
        component={SendScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FeeScreen" component={FeeScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen
        name="TransactionComplete"
        component={TransactionCompleteScreen}
      />
    </Stack.Navigator>
  );
};

export default SendNavigation;
