import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Receive from "../screens/Receive";
import SendScreen from "../screens/send/SendScreen";
import Settings from "../screens/Settings";
import SendNavigation from "./SendNavigation";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Colours } from "../../assets/colours/Colours";

const Tabs = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colours.Orange,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Send"
        component={SendNavigation}
        options={{
          tabBarLabel: "Send",
          tabBarIcon: ({ color, size }) => (
            <Feather name="upload" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Receive"
        component={Receive}
        options={{
          tabBarLabel: "Receive",
          tabBarIcon: ({ color, size }) => (
            <Feather name="download" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
