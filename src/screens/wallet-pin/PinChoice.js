import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "../../components/SingleButtonFilled";
import bcrypt from "react-native-bcrypt";
import isaac from "isaac";
import { useDispatch, useSelector } from "react-redux";
import { setPinHash } from "../../reducers/pin";

const PinChoice = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [isError, setIsError] = useState(false);

  const { wallet } = useSelector((state) => state.wallet);

  // console.log(wallet);

  const dispatch = useDispatch();

  let onPress = async () => {
    // check PIN logic

    console.log(pin, confirmPin);

    if (pin !== confirmPin) {
      setIsError(true);
    } else {
      setIsError(false);

      bcrypt.setRandomFallback((len) => {
        const buf = new Uint8Array(len);

        return buf.map(() => Math.floor(isaac.random() * 256));
      });

      let salt = bcrypt.genSaltSync(10);

      let pinHash = bcrypt.hashSync(pin, salt);

      dispatch(setPinHash({ hash: pinHash, pin }));

      navigation.navigate("WalletSetupSuccess");
    }
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
        onChangeText={setPin}
      />

      <Text style={styles.label}>Re-enter PIN:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry={true}
        letterSpacing={15}
        maxLength={6}
        onChangeText={setConfirmPin}
      />

      {isError && <Text style={styles.errorMessage}>Pins don't match!</Text>}

      <SingleButtonFilled
        text="Submit"
        onPress={() => {
          onPress();
        }}
      />
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
  errorMessage: {
    color: "red",
    fontFamily: "inter-regular",
    fontSize: 14,
  },
});

export default PinChoice;
