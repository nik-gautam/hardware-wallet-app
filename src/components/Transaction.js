import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colours } from "../../assets/colours/Colours";

const Transaction = ({ data }) => {
  const { name, imageURL, date, cryptoAmount, rupeeAmount } = data;

  //   console.log(data);
  return (
    <View style={styles.row}>
      <Image source={{ uri: imageURL }} style={styles.image} />

      <View style={styles.detailsNameDate}>
        <Text style={styles.detailsName}>{name}</Text>
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
  image: {
    flex: 2,
    height: 50,
    width: 50,
    // borderWidth: 1,
    // borderColor: "red",
  },
  detailsAmount: {
    flex: 3,
    alignItems: "flex-end",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  detailsNameDate: {
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
