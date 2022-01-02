import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonic } from "../../reducers/onboarding";

const RestoreIntro = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const { mnemonic } = useSelector((state) => state.onboarding);
  // console.log(getTransactions());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restore Wallet</Text>
      <Text style={styles.description}>
        Let's restore your wallet by using the recovery phrase provided to you
        at the time of Wallet creation.
      </Text>
      <Text style={styles.description}>
        A recovery phrase is a series of 12 words in a specific order. This word
        combination is unique to your wallet.
      </Text>

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        onPress={() => navigation.navigate("RestoreValidate")}
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

export default RestoreIntro;
