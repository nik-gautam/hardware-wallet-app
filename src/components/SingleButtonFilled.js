import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";

const SingleButtonFilled = ({ text,onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colours.Orange,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: Colours.Neutral_2,
    fontFamily: "inter-medium",
  },
});

export default SingleButtonFilled;
