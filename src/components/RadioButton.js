import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RadioButton = () => {
  let [isSelected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View styles={styles.radioButton}>
        <TouchableOpacity
          style={styles.radioIcon}
          onPress={() => {
            setSelected(!isSelected);
          }}
        >
          {isSelected ? (
            <Ionicons name="radio-button-on" size={30} />
          ) : (
            <Ionicons name="radio-button-off" size={30} />
          )}
        </TouchableOpacity>

        <View style={styles.radioLevel}>
          <Text> High </Text>
          <Text> 2 - 3 mins </Text>
        </View>

        <View style={styles.radioText}>
          <Text> 0.0001 ETH </Text>
          <Text> $10 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 80,
  },
  radioButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    marginTop: 10,
    marginBottom: 10,
  },
  radioIcon: {
    // flex: 1,
    // width: 30,
    // height: 30,
    position: "absolute",
    left: 0,
  },
  radioLevel: {
    // flex: 2,
    // width: 40,
    // height: 20,
    position: "absolute",
    left: 40,
  },
  radioText: {
    // flex: 3,
    // width: 40,
    // height: 20,
    position: "absolute",
    right: 0,
  },
});

export default RadioButton;
