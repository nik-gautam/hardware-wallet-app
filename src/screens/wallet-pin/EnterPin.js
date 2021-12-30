import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import bcrypt from "react-native-bcrypt/dist/bcrypt";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "../../components/SingleButtonFilled";

const EnterPin = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [isError, setIsError] = useState(false);
  const { pinHash, pin: varPin } = useSelector((state) => state.pin);

  let onPress = () => {
    let match = bcrypt.compareSync(pin, pinHash);

    if (match === false) {
      setIsError(true);
    } else {
      navigation.navigate("TabNavigator", { screen: "Home" });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your PIN to log in</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry={true}
        letterSpacing={15}
        maxLength={6}
        value={pin}
        onChangeText={setPin}
      />

      {isError && <Text style={styles.errorMessage}>Pins don't match!</Text>}

      <SingleButtonFilled text="Submit" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: Colours.Neutral_5,
    borderRadius: 10,
    height: 60,
    padding: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 30,
  },
  errorMessage: {
    color: "red",
    fontFamily: "inter-regular",
    fontSize: 14,
  },
});

export default EnterPin;
