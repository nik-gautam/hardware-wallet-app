import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RadioButton from "../../components/RadioButton";

const FeeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text> Fee Screen </Text>

      <RadioButton />
      <Button
        title="Continue"
        onPress={() => navigation.navigate("SummaryScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default FeeScreen;
