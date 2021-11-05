import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colours } from "../../assets/colours/Colours";

const Transaction = ({ data }) => {
  const { name, imageURL, date, cryptoAmount, rupeeAmount } = data;

//   console.log(data);
  return (
    <View style={styles.row}>
      <Image source={{ uri: imageURL }} style={styles.image} />

      <View style={styles.detailsNameDate}>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </View>

      <View style={styles.detailsAmount}>
        <View style={styles.amount}>
          <FontAwesome name="bitcoin" size={16} color="black" />
          <Text style={styles.crypto}>{cryptoAmount}</Text>
        </View>
        <View style={styles.amount}>
          <FontAwesome name="rupee" size={16} color="black" />
          <Text style={styles.rupee}>{rupeeAmount}</Text>
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
    borderBottomWidth: 1,
    borderColor: Colours.Neutral_4,
  },
  amount: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 4,
  },
  crypto: {
    marginLeft: 5,
    color: "black",
  },
  rupee: {
    marginLeft: 5,
    color: "black",
  },
  image: {
    height: 50,
    width: 50,
    flex: 1,
    // borderWidth:1,
    // borderColor:'red'
  },
  detailsAmount: {
    flex: 1.5,
    // borderWidth:1,
    // borderColor:'blue'
  },
  detailsNameDate: {
    flex: 6,
    // borderWidth:1,
    // borderColor:'green',
    padding: 5,
  },
});

export default Transaction;
