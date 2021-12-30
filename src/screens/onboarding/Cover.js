import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import SingleButtonFilled from "../../components/SingleButtonFilled";
import { Colours } from "../../../assets/colours/Colours";

const Cover = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="bitcoin"
        size={100}
        color={Colours.Orange}
        style={styles.icon}
      />
      <Text style={styles.title}>Hardware Wallet</Text>
      <Text style={styles.description}>
        A simple bitcoin wallet for your enjoyment.
      </Text>
      <SingleButtonFilled
        text="Create a new wallet"
        onPress={() => navigation.navigate("RecoveryIntro")}
      />
      <TouchableOpacity
        style={styles.restoreWallet}
        onPress={()=>navigation.navigate("RestoreIntro")}
        >
        <Text style={styles.restoreWalletText}>Restore existing wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 24,
    marginVertical: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: Colours.Neutral_6,
    marginBottom: 20,
  },
  icon: {
    textAlign: "center",
  },
  restoreWallet: {
    marginVertical: 30,
  },
  restoreWalletText: {
    color: Colours.Orange,
    textAlign: "center",
  },
});

export default Cover;
