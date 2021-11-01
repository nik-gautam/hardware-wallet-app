import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Receive = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> Receive Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Receive;
