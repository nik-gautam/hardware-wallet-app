import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native-elements";
import { Colours } from "../../assets/colours/Colours";

const Home = () => {
  return (
    <>
      <View style={styles.wallet}>
        <StatusBar style="auto" />
        <Text h4 style={styles.wallet_name}>
          Wallet name
        </Text>
        <View style={styles.balance}>
          <FontAwesome name="bitcoin" size={24} color="white" />
          <Text style={styles.crypto}>1.62402785</Text>
        </View>
        <View style={styles.balance}>
          <FontAwesome name="rupee" size={16} color="white" />
          <Text style={styles.rupee}>7645060.27</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  rupee: {
    fontSize: 16,
    marginLeft: 7,
    color: "white",
  },
  crypto: {
    fontSize: 24,
    marginLeft: 7,
    color: "white",
  },
  wallet_name: {
    color: "white",
    marginVertical: 5,
  },
  wallet: {
    borderRadius: 25,
    marginTop: 40,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: Colours.Blue,
  },
  wallet_components: {},
});

export default Home;
