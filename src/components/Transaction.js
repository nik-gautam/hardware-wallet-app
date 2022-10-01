import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";
import moment from "moment";
import { useGetUSDQuery } from "../apis/etherscan";
import { useGetUSDtoINRQuery } from "../apis/currency";
import { useSelector } from "react-redux";

let roundOff = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const Transaction = ({ data }) => {
  const { to, timeStamp, value } = data;
  const { address } = useSelector((state) => state.wallet);

  let toAddress = to;
  let date = moment.unix(timeStamp).format("llll");

  let cryptoAmount = value / 1e18;

  let {
    data: ETH_USD,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetUSDQuery();
  let {
    data: USD_INR,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useGetUSDtoINRQuery();

  if (isLoading1 || isLoading2) {
    return <Text>Loading...</Text>;
  } else if (isError1 || isError2) {
    console.log("===== error 1 ======");
    console.log(error1);

    console.log("===== error 2 ======");
    console.log(error2);

    return <Text>Error occurred...</Text>;
  }

  ETH_USD = ETH_USD.ethusd;
  USD_INR = USD_INR.rates.INR;

  let rupeeAmount = roundOff(cryptoAmount * ETH_USD * USD_INR);

  if (address === "") {
    return (
      <View>
        <Text>Error in Loading Account</Text>
      </View>
    );
  }

  return (
    <View style={styles.row}>
      <View style={styles.detailsAddressDate}>
        <Text style={styles.detailsName}>{toAddress}</Text>
        <Text style={styles.detailsDate}>{date}</Text>
      </View>

      <View style={styles.detailsAmount}>
        {String(address).toLowerCase() != to ? (
          <View style={styles.amount}>
            <Text style={styles.sendCrypto}> - ETH {cryptoAmount}</Text>
          </View>
        ) : (
          <View style={styles.amount}>
            <Text style={styles.receiveCrypto}> + ETH {cryptoAmount}</Text>
          </View>
        )}

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
  sendCrypto: {
    marginLeft: 4,
    color: Colours.Red,
    fontFamily: "inter-regular",
    fontWeight: "normal",
    fontSize: 15,
  },
  receiveCrypto: {
    marginLeft: 4,
    color: Colours.Green,
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
