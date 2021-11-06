import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Colours } from "../../../assets/colours/Colours";

const TransactionCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconBackground}>
          <FontAwesome name="send" size={24} color="white" />
        </View>
        <Text h4 style={styles.title}>
          Transaction complete!
        </Text>
        <Text style={styles.text}>
          It usually takes about 30 minutes for a transaction to be finalized.
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.transaction]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Home");
          }}>
          <Text>View transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.home]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Home");
          }}>
          <Text>Done</Text>
        </TouchableOpacity>
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
  iconBackground: {
    backgroundColor: "green",
    alignSelf: "center",
    padding: 15,
    borderRadius: 50,
  },
  title: {
    marginTop: 40,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginHorizontal: 25,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
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
    width: 300,
    // borderColor: "green",
    // borderWidth: 5,
  },
});

export default TransactionCompleteScreen;
