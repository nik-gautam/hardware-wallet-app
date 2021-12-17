import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";

const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First, let's create your recovery phrase</Text>
      <Text style={styles.description}>
        A recovery phrase is a series of 12 words in a specific order. This word
        combination is unique to your wallet. Make sure to have pen and paper
        ready so you can write it down.
      </Text>

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        onPress={() => {
          navigation.navigate("RecoveryCopy");
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

export default Intro;