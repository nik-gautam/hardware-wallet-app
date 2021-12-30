import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";

const SingleButtonFilled = ({ text, onPress, status }) => {
  if (status == null || status == true) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={[styles.button,styles.disabled]} disabled={true}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: Colours.Orange,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: Colours.Neutral_2,
    fontFamily: "inter-medium",
  },
  disabled:{
    backgroundColor:Colours.Neutral_6
  }
});

export default SingleButtonFilled;
