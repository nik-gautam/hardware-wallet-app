import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transaction from "../components/Transaction";
import TransactionDetail from "../screens/TransactionDetail";

const Stack = createNativeStackNavigator();

const TransactionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Back",
        headerTitleStyle: {
          fontFamily: "inter-regular",
          fontSize: 18,
        },
      }}>
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;
