import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";

const ValidateIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's double-check</Text>
      <Text style={styles.description}>
        Well done. Now let’s verify that you've written down your recovery
        phrase correctly. Yes, it’s that important.
      </Text>

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        onPress={() => {
          navigation.navigate("RecoveryValidate");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 25,
  },
  title: {
    fontFamily: "inter-semi-bold",
    fontSize: 21,
    marginBottom: 15,
  },
  description: {
    fontFamily: "inter-regular",
    fontSize: 18,
    marginBottom: 30,
    color: Colours.Neutral_7,
  },
  button: {},
});

export default ValidateIntro;
