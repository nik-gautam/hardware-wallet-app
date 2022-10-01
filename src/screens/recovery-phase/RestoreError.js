import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonic } from "../../reducers/onboarding";

const RestoreError = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const { mnemonic } = useSelector((state) => state.onboarding);
  // console.log(getTransactions());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restore Wallet</Text>
      <Text style={styles.description}>Something went wrong!</Text>
      <Text style={styles.description}>
        Please re-confirm whether the recovery phase provided is correct.
      </Text>

      <SingleButtonFilled
        text="Login"
        style={styles.button}
        onPress={() => {
          navigation.navigate("Onboarding", { screen: "CoverWithAccount" });
        }}
      />
      <SingleButtonFilled
        text="Main Menu"
        style={styles.button}
        onPress={() => {
          navigation.navigate("Cover");
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

export default RestoreError;
