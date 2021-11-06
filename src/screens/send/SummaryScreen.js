import moment from "moment";
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { Colours } from "../../../assets/colours/Colours";

const SummaryScreen = ({ navigation, route }) => {
  let data = {
    amount: route.params.amount,
    address: route.params.address,
    feeLevel: route.params.feeLevel,
  };

  const todayDate = moment(Date.now()).format("MMM DD, YYYY");
  const todayTime = moment(Date.now()).format("hh:mm A");

  return (
    <View style={styles.container}>
      <View>
        <Text h4 style={styles.title}>
          Ready to send?
        </Text>

        <View style={styles.row}>
          <Text style={styles.key}>To</Text>
          <Text style={styles.value}>{data.address}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Amount</Text>
          <Text style={styles.value}>{data.amount} ETH</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Fee</Text>
          <Text style={styles.value}>{data.feeLevel.fee} ETH</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Time</Text>
          <Text style={styles.value}>
            {todayDate} at {todayTime}
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title="Send"
          onPress={() => navigation.navigate("TransactionComplete")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },
  title: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderColor: Colours.Neutral_4,
    borderBottomWidth: 1,
  },
  key: {
    flex: 1,
    fontWeight: "bold",
  },
  value: {
    flex: 3,
    textAlign: "right",
  },
  button: {
    marginBottom: 30,
    // borderColor: "green",
    // borderWidth: 5,
  },
});

export default SummaryScreen;
