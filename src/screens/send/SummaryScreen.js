import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SummaryScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> Summary Screen </Text>

      <Button
        title="Send"
        onPress={() => navigation.navigate("TransactionComplete")}
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

export default SummaryScreen;
