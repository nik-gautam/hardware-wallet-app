import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { SimpleLineIcons } from "@expo/vector-icons";

const WalletSetupSuccess = () => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name="check" size={72} color="green" style={styles.icon} />
      <Text style={styles.title}>Your wallet is ready</Text>
      <Text style={styles.description}>
        You should now have your recovery phrase and your wallet password
        written down for future reference.
      </Text>
      <Text style={styles.description}>
        Your wallet is still empty, so your next step might be to receive
        Bitcoin from somebody.
      </Text>

      <SingleButtonFilled text="Continue" style={styles.button} />
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
    textAlign:'center'
  },
  description: {
    fontFamily: "inter-regular",
    fontSize: 18,
    marginBottom: 30,
    color: Colours.Neutral_7,
  },
  button: {},
  icon:{
      marginBottom:20,
      alignSelf:'center'
  }
});

export default WalletSetupSuccess;
