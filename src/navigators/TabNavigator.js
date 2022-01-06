import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Receive from "../screens/Receive";
import Settings from "../screens/Settings";
import SendNavigation from "./SendNavigator";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Colours } from "../../assets/colours/Colours";
import HomeNavigator from "./HomeNavigator";
import RecoveryNavigator from "./RecoveryNavigator";

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colours.Orange,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeNavigator}
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

      <Tabs.Screen
        name="RN"
        component={RecoveryNavigator}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //   <Feather name="settings" size={size} color={color} />
          // ),
          // tabBarShowLabel: false,
          // tabBarIconStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs.Navigator>
  );
};
