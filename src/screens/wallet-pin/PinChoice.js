import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "../../components/SingleButtonFilled";

const PinChoice = ({ navigation }) => {
  let onPress = () => {
    // check PIN logic

    navigation.navigate("WalletSetupSuccess");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your PIN</Text>
      <Text style={styles.description}>
        This is used as an extra verification mechanism to access your wallet
        and send transactions.
      </Text>

      <Text style={styles.label}>Enter PIN:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry={true}
        letterSpacing={15}
        maxLength={6}
      />

      <Text style={styles.label}>Re-enter PIN:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry={true}
        letterSpacing={15}
        maxLength={6}
      />

      <SingleButtonFilled text="Submit" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
  },
  description: {
    color: Colours.Neutral_7,
    fontSize: 18,
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: Colours.Neutral_5,
    borderRadius: 10,
    height: 60,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 25,
  },
  label: {
    marginBottom: 5,
  },
});

export default PinChoice;
