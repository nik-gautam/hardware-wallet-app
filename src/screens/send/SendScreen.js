import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SendScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> Send Screen </Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("FeeScreen")}
      />
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

export default SendScreen;
