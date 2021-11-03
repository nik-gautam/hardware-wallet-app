import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import RadioButton from "../../components/RadioButton";

const FeeScreen = ({ navigation }) => {
  let [feeLevel, setFeeLevel] = useState({
    id: 2,
    name: "Medium",
    time: 30,
    fee: 0.000032,
  });

  return (
    <View style={styles.screen}>
      <Text> Fee Screen </Text>

      <RadioButton setFeeLevel={setFeeLevel} />

      <Text>
        {" "}
        Selected: {feeLevel.name} ----- {feeLevel.fee} ETH{" "}
      </Text>

      <Pressable
        style={styles.continueButton}
        onPress={() => navigation.navigate("SummaryScreen")}
      >
        <Text style={styles.continueButtonText}> Continue </Text>
      </Pressable>
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
  continueButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    // width: 340,
    // height: 30,
    backgroundColor: Colours.Orange,
    margin: 15,
    marginBottom: 25,
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  continueButtonText: {
    fontFamily: "inter-medium",
    fontWeight: "400",
    fontSize: 15,
    color: Colours.Neutral_1,
  },
});

export default FeeScreen;
