import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";
import { useNavigation } from "@react-navigation/native";

const Transaction = ({ data }) => {
  const navigation = useNavigation();
 
  const { from, timeStamp, value } = data;

  let fromAddress = from;
  let date = timeStamp;
  let cryptoAmount = value / 1e18;
  // let rupeeAmount = ethToINR(value);
  let rupeeAmount = value / 1e18;

  return (
    <View
      style={styles.row}
      // onPress={() => navigation.navigate("TransactionDetail", { data })}
    >
      <View style={styles.detailsAddressDate}>
        <Text style={styles.detailsName}>{fromAddress}</Text>
        <Text style={styles.detailsDate}>{date}</Text>
      </View>

      <View style={styles.detailsAmount}>
        <View style={styles.amount}>
          <Text style={styles.crypto}>ETH {cryptoAmount}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.rupee}> &#8377; {rupeeAmount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Colours.Neutral_4,
  },
  amount: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 4,
  },
  crypto: {
    marginLeft: 4,
    color: "black",
    fontFamily: "inter-regular",
    fontWeight: "normal",
    fontSize: 15,
  },
  rupee: {
    marginLeft: 4,
    color: "black",
    fontFamily: "inter-light",
    fontSize: 12,
  },
  detailsAmount: {
    flex: 3,
    alignItems: "flex-end",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  detailsAddressDate: {
    flex: 6,
    padding: 5,
    // borderWidth: 1,
    // borderColor: "green",
  },
  detailsName: {
    fontFamily: "inter-regular",
    fontWeight: "normal",
    marginTop: 5,
    fontSize: 15,
  },
  detailsDate: {
    fontFamily: "inter-light",
    marginTop: 5,
    fontSize: 12,
  },
});

export default Transaction;
