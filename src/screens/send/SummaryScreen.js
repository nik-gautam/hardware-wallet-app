import moment from "moment";
import React from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Colours } from "../../../assets/colours/Colours";
import { sendTransaction } from "../../reducers/wallet";

const SummaryScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { wallet, mnemonic, loading } = useSelector((state) => state.wallet);

  // console.log("wallet from txn summary", wallet);

  let data = {
    amount: route.params.amount,
    address: route.params.address,
    fee: route.params.fee,
  };

  let onPress = () => {
    console.log("pre-send data", {
      receiver: data.address,
      amount: data.amount,
      gas: parseFloat(data.fee),
      wallet,
      mnemonic: mnemonic.join(" "),
    });

    dispatch(
      sendTransaction({
        receiver: data.address,
        amount: data.amount,
        gas: parseFloat(data.fee),
        wallet,
        mnemonic: mnemonic.join(" "),
      })
    );

    navigation.navigate("TransactionComplete");
  };

  const todayDate = moment(Date.now()).format("MMM DD, YYYY");
  const todayTime = moment(Date.now()).format("hh:mm A");

  // console.log(data);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ready to send?</Text>

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
          <Text style={styles.value}>{data.fee} Gwei</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Time</Text>
          <Text style={styles.value}>
            {todayDate} at {todayTime}
          </Text>
        </View>
      </View>

      {/* {loading.sendTransaction && <Text> Sending Txn </Text>} */}

      <Pressable
        style={styles.continueButton}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={styles.continueButtonText}> Continue </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    // marginTop: 15,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: "black",
  },
  title: {
    fontFamily: "inter-bold",
    fontWeight: "600",
    color: Colours.Black,
    fontSize: 25,
    marginBottom: 20,
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
    fontFamily: "inter-medium",
    fontSize: 15,
    fontWeight: "400",
  },
  value: {
    flex: 3,
    fontFamily: "inter-light",
    fontSize: 15,
    textAlign: "right",
    color: Colours.Neutral_7,
  },
  continueButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    // width: 340,
    // height: 30,
    backgroundColor: Colours.Orange,
    margin: 15,
    marginBottom: 25,
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  continueButtonText: {
    fontFamily: "inter-medium",
    fontWeight: "400",
    fontSize: 15,
    color: Colours.Neutral_1,
  },
});

export default SummaryScreen;
