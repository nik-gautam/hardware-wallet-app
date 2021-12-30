import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import SingleButtonFilled from "../../components/SingleButtonFilled";
import { Colours } from "../../../assets/colours/Colours";

const CoverWithAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <FontAwesome5
          name="bitcoin"
          size={100}
          color={Colours.Orange}
          style={styles.icon}
        />
        <Text style={styles.title}> Hardware Wallet </Text>
        <Text style={styles.description}>Welcome back.</Text>
        <SingleButtonFilled
          text="Log in"
          onPress={() => navigation.navigate("EnterPin")}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity
          style={styles.resetWallet}
          onPress={() =>
            navigation.navigate("RecoveryNavigator", {
              screen: "RestoreIntro",
            })
          }>
          <Text style={styles.resetWalletText}> Reset wallet </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
    marginTop: 40,
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
    marginBottom: 30,
  },
  icon: {
    textAlign: "center",
  },
  resetWallet: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    justifyContent: "flex-end",
    padding: 50,
  },
  resetWalletText: {
    color: Colours.Orange,
    textAlign: "center",
  },
  upper: {
    flex: 5,
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "center",
  },
  lower: {
    flex: 2,
    // borderColor: "green",
    // borderWidth: 1,
  },
});

export default CoverWithAccount;
