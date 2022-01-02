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
import { useGetGasPriceQuery } from "../apis/etherscan";

const RadioButton = ({ setFeeLevel }) => {
  let [isSelected, setSelected] = useState([false, true, false]);

  // const { data, isLoading, isError } = useGetGasPriceQuery();

  // if (isError) {
  //   return (
  //     <View style={styles.container}>
  //       <Text> Error in Getting Gas Price </Text>
  //     </View>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text> Loading.... </Text>
  //     </View>
  //   );
  // }

  let levels = [
    {
      id: 1,
      name: "High",
      time: 15,
      fee: 2.000001,
    },
    {
      id: 2,
      name: "Medium",
      time: 30,
      fee: 1.500001,
    },
    {
      id: 3,
      name: "Low",
      time: 45,
      fee: 1.000001,
    },
  ];

  return (
    <View style={styles.container}>
      {levels.map((level) => (
        <View key={level.id} style={styles.radioButton}>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View style={styles.radioLevel}>
              <Text style={styles.radioLevelName}> {level.name} </Text>
              <Text style={styles.radioLevelTime}>
                {"< " + level.time}
                secs
              </Text>
            </View>

            <View style={styles.radioText}>
              <Text style={styles.radioLevelName}>{level.fee} Gwei</Text>
              {/* <Text style={styles.radioLevelAmount}> &#8377; 10 </Text> */}
            </View>
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

    borderTopColor: Colours.Neutral_3,
    borderTopWidth: 1,
  },
  radioButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 20,

    borderBottomColor: Colours.Neutral_3,
    borderBottomWidth: 1,
  },
  radioIcon: {
    // flex: 1,
    // width: 30,
    // height: 30,
    //left: 0,
  },
  radioLevel: {
    // flex: 2,
    // width: 40,
    // height: 20,
    //left: 40,
    marginLeft: 10,
  },
  radioLevelName: {
    fontFamily: "inter-regular",
    fontSize: 16,
    fontWeight: "normal",
  },
  radioLevelTime: {
    fontFamily: "inter-extra-light",
    fontSize: 12,
    fontWeight: "normal",
    color: Colours.Neutral_7,
  },
  radioLevelAmount: {
    fontFamily: "inter-extra-light",
    fontSize: 12,
    fontWeight: "normal",
    color: Colours.Neutral_7,
    textAlign: "right",
  },
  radioText: {
    // flex: 3,
    // width: 40,
    // height: 20,
    //right: 0,
  },
});

export default RadioButton;
