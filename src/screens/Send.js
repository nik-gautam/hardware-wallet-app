import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Send = () => {
  return (
    <View style={styles.screen}>
      <Text> Send Screen </Text>
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

export default Send;
