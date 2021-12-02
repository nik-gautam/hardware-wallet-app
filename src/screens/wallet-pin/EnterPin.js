import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "../../components/SingleButtonFilled";

const EnterPin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your PIN to log in</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry={true}
        letterSpacing={15}
        maxLength={6}
      />

      <SingleButtonFilled text="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: Colours.Neutral_5,
    borderRadius: 10,
    height: 60,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 30,
  },
});

export default EnterPin;
