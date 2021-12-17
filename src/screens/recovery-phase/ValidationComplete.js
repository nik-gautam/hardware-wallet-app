import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Colours } from "../../../assets/colours/Colours";

const ValidationComplete = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.transactionMessage}>
        <View style={styles.iconBackground}>
          <FontAwesome name="check" size={24} color="white" />
        </View>
        <Text style={styles.title}> Wallet restored! </Text>
        <Text style={styles.text}>
          You should now have your recovery phrase and your wallet password
          written down for future reference.
        </Text>
        <Text style={[styles.text, { marginTop: 5 }]}>
          Your wallet is still empty, so your next step might be to receive
          Ether from somebody.
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        {/* <Pressable
          style={[styles.button, styles.transaction]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("Home");
          }}
        >
          <Text style={[styles.buttonText, { color: Colours.Black }]}>
            View transaction
          </Text>
        </Pressable> */}
        <Pressable
          style={[styles.button, styles.home]}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate("TabNavigator", {screen: "Home"});
          }}
        >
          <Text style={styles.buttonText}> Go to Home </Text>
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
    // borderWidth: 1,
    // borderColor: "red",
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

export default ValidationComplete;
