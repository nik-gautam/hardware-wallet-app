import React from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Colours } from "../../../assets/colours/Colours";

const TransactionCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.transactionMessage}>
        <View style={styles.iconBackground}>
          <FontAwesome name="send" size={24} color="white" />
        </View>
        <Text style={styles.title}>Transaction complete!</Text>
        <Text style={styles.text}>
          It usually takes about 30 minutes for a transaction to be finalized.
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <Pressable
          style={[styles.button, styles.transaction]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Home");
          }}
        >
          <Text style={[styles.buttonText, { color: Colours.Black }]}>
            View transaction
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.home]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: "black",
  },
  transactionMessage: {
    marginBottom: 200,
  },
  iconBackground: {
    backgroundColor: Colours.Green,
    alignSelf: "center",
    padding: 15,
    borderRadius: 50,
  },
  title: {
    marginTop: 40,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: "inter-bold",
    fontWeight: "600",
    color: Colours.Black,
    fontSize: 25,
  },
  text: {
    textAlign: "center",
    fontFamily: "inter-light",
    fontSize: 15,
    color: Colours.Neutral_6,
    marginHorizontal: 25,
  },
  button: {
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    elevation: 5,
    // borderColor: "blue",
    // borderWidth: 1,
  },
  transaction: {
    backgroundColor: Colours.Neutral_4,
  },
  home: {
    backgroundColor: Colours.Orange,
  },
  buttonGroup: {
    alignSelf: "center",
    marginBottom: 30,
    position: "absolute",
    bottom: 0,
    width: "100%",

    // borderColor: "green",
    // borderWidth: 5,
  },
  buttonText: {
    fontFamily: "inter-medium",
    fontWeight: "400",
    fontSize: 15,
    color: Colours.Neutral_1,
  },
});

export default TransactionCompleteScreen;
