import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Colours } from "../../assets/colours/Colours";

const Receive = ({ navigation }) => {
  const { balance, address } = useSelector((state) => state.wallet);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Details</Text>

      <View style={[styles.field, styles.column]}>
        <Text style={styles.attribute}>Address</Text>
        <Text>{address}</Text>
      </View>

      <View style={[styles.field, styles.row]}>
        <Text style={styles.attribute}>Balance</Text>
        <Text>ETH {balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 10,
  },
  title: {
    // borderWidth: 1,
    // borderColor: "green",
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  field: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: Colours.Neutral_4,
  },
  attribute: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Receive;
