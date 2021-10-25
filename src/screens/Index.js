import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Index = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text> Hello </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
