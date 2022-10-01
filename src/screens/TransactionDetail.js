import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import { Colours } from "../../assets/colours/Colours";

const TransactionDetail = ({ route }) => {
  let { data, index } = route.params;

  let {
    from,
    to,
    value,
    timeStamp,
    gasUsed,
    gasPrice,
    txreceipt_status,
    confirmations,
  } = data;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Transaction #{index + 1}</Text>

      <View style={styles.row}>
        <Text style={styles.attribute}>From</Text>
        <Text>{from}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>To</Text>
        <Text>{to}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Amount</Text>
        <Text>ETH {value / 1e18}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Time</Text>
        <Text>{moment.unix(timeStamp).format("MMM DD, YYYY [at] h:mm a")}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Gas</Text>
        <Text>{gasUsed}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Gas Price</Text>
        <Text>{gasPrice} wei</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Transaction Receipt Status</Text>
        <Text>{txreceipt_status}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.attribute}>Confirmations</Text>
        <Text>{confirmations}</Text>
      </View>

      {/* <View style={styles.row}>
        <Text style={styles.attribute}>More Details</Text>
        <Text>{}</Text>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
    marginHorizontal: 5
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
  row: {
    flexDirection: "row",
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

export default TransactionDetail;
