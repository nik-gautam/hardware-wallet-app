import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";
import { Colours } from "../../../assets/colours/Colours";

const SendScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(true);

  const [amount, setAmount] = useState("");
  const [validAmount, setValidAmount] = useState(true);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Send Ethereum </Text>

      <View style={styles.address}>
        <Text style={styles.addressTitle}> Address </Text>

        <TextInput
          style={styles.addressInput}
          placeholder="Enter Address"
          value={address}
          onChangeText={setAddress}
          onEndEditing={() => {
            isNaN(address) ? setValidAddress(false) : setValidAddress(true);
          }}
        />
        {validAddress ? null : (
          <Text style={styles.errorMessage}>Enter a valid address!</Text>
        )}
      </View>

      <View style={styles.amount}>
        <Text style={styles.amountText}> Amount </Text>

        <Text style={styles.amountRemaining}>Balance Remaining: 0.01 ETH</Text>

        <TextInput
          style={styles.amountInput}
          placeholder="Enter Amount"
          value={amount}
          onChangeText={setAmount}
          onEndEditing={() => {
            isNaN(amount) ? setValidAmount(false) : setValidAmount(true);
          }}
        />

        {validAmount ? null : (
          <Text style={styles.errorMessage}>Enter a valid amount!</Text>
        )}
      </View>

      {/* <Button
        style={styles.continueButton}
        title="Continue"
        onPress={() => navigation.navigate("FeeScreen")}
      /> */}

      <Pressable
        style={styles.continueButton}
        onPress={() => {
          if (
            isNaN(address) ||
            isNaN(amount) ||
            address === "" ||
            amount === ""
          ) {
            isNaN(address) || address === ""
              ? setValidAddress(false)
              : setValidAddress(true);
            isNaN(amount) || amount === ""
              ? setValidAmount(false)
              : setValidAmount(true);
          } else {
            navigation.navigate("FeeScreen", { address, amount });
          }
        }}>
        <Text style={styles.continueButtonText}> Continue </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",

    marginTop: 60,

    padding: 20,
  },
  title: {
    fontFamily: "inter-bold",
    fontWeight: "600",
    color: Colours.Black,
    fontSize: 25,
  },
  address: {
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    width: "100%",
  },
  addressTitle: {
    fontFamily: "inter-medium",
    fontWeight: "400",
    fontSize: 15,
  },
  addressInput: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    borderColor: Colours.Neutral_5,
    borderWidth: 1,
    borderRadius: 5,
  },
  amount: {
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    width: "100%",
  },
  amountText: {
    fontFamily: "inter-medium",
    fontWeight: "400",
    fontSize: 15,
  },
  amountInput: {
    marginTop: 10,
    padding: 10,
    borderColor: Colours.Neutral_5,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  amountRemaining: {
    fontFamily: "inter-light",
    fontSize: 10,
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
  errorMessage: {
    color: "red",
    fontSize: 14,
  },
});

export default SendScreen;
