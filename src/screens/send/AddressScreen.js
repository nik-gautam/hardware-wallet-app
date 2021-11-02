import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddressScreen = () => {
  return (
    <View style={styles.screen}>
      <Text> Address Screen </Text>
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

export default AddressScreen;
