import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";

const WordCell = ({ index, item }) => {
  return (
    <TouchableOpacity style={styles.wordCell}>
      <View style={styles.cellNumber}>
        <Text style={styles.bold}>{index + 1}</Text>
      </View>
      <View style={styles.word}>
        <Text style={styles.bold}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wordCell: {
    flex: 1 / 2,
    borderColor: "blue",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
  },
  cellNumber: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colours.Neutral_4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 1,
  },
  word: {
    flex: 3,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colours.Neutral_4,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default WordCell;
