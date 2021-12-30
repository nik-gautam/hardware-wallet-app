import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "../../components/SingleButtonFilled";

const EnterPin = ({ navigation }) => {
  const [pin, setPin] = useState("");

  let onPress = () => {
    // check PIN logic

    navigation.navigate("TabNavigator", { screen: "Home" });
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
});

export default EnterPin;
