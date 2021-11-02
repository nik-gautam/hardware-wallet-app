import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Receive from "../screens/Receive";
import SendScreen from "../screens/send/SendScreen";
import Settings from "../screens/Settings";
import SendNavigation from "./SendNavigation";

const Tabs = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Send" component={SendNavigation} />
      <Tabs.Screen name="Receive" component={Receive} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};
