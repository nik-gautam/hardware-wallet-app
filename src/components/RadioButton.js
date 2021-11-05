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
import { Colours } from "../../assets/colours/Colours";

const RadioButton = ({ setFeeLevel }) => {
  let [isSelected, setSelected] = useState([false, true, false]);

  let levels = [
    {
      id: 1,
      name: "High",
      time: 15,
      fee: 0.000042,
    },
    {
      id: 2,
      name: "Medium",
      time: 30,
      fee: 0.000032,
    },
    {
      id: 3,
      name: "Low",
      time: 45,
      fee: 0.000021,
    },
  ];

  return (
    <View style={styles.container}>
      {levels.map((level) => (
        <View key={level.id} styles={styles.radioButton}>
          <TouchableOpacity
            style={styles.radioIcon}
            onPress={() => {
              let change = [false, false, false];

              change[level.id - 1] = true;

              setFeeLevel(level);
              setSelected(change);
            }}
          >
            {isSelected[level.id - 1] ? (
              <Ionicons name="radio-button-on" size={30} />
            ) : (
              <Ionicons name="radio-button-off" size={30} />
            )}
          </TouchableOpacity>

          <View style={styles.radioLevel}>
            <Text> {level.name} </Text>
            <Text> {"< " + level.time} secs </Text>
          </View>

          <View style={styles.radioText}>
            <Text> {level.fee} ETH </Text>
            <Text> $10 </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 80,
  },
  radioButton: {
    backgroundColor: Colours.Blue,
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",

    marginTop: 10,
    marginBottom: 10,

    padding: 20,

    // position: "absolute",
  },
  radioIcon: {
    // backgroundColor: Colours.Green,
    // flex: 1,
    // width: 30,
    // height: 30,
    position: "relative",
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
