import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TransactionCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> Transaction Complete </Text>

      <Button
        title="Go to Home"
        onPress={() => {
          navigation.popToTop();

          navigation.navigate("Home");
        }}
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

export default TransactionCompleteScreen;
