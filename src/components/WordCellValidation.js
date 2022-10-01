import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours } from "../../assets/colours/Colours";
import { useDispatch, useSelector } from "react-redux";
import { setError, setInputSequence } from "../reducers/onboarding";

const WordCellValidation = ({ index, item, setTitle, setStatus }) => {
  const [bgColor, setBgColor] = useState(Colours.Neutral_4);
  const [idx, setIdx] = useState(index);

  const dispatch = useDispatch();
  const { mnemonic, inputSequence, error } = useSelector(
    (state) => state.onboarding
  );

  let onClick = () => {
    if (error == false) {
      let i = inputSequence.length;

      if (mnemonic[i] == item) {
        correctWord(i);
      } else {
        wrongWord();
      }
    }
  };

  let correctWord = (index) => {
    setBgColor(Colours.Green);
    setIdx(index);

    let prevLen = inputSequence.length;
    dispatch(setInputSequence([...inputSequence, item]));

    if (prevLen + 1 == mnemonic.length) {
      setStatus(true);
      setTitle("Perfect. Make sure to securely store your recovery phrase.")
    }
  };

  let wrongWord = () => {
    setBgColor(Colours.Red);
    dispatch(setError(true));
    setTitle("Sorry, that’s not the correct sequence. Give it another try.");
    dispatch(setInputSequence([]));
  };

  return (
    <TouchableOpacity style={styles.wordCell} onPress={onClick}>
      <View style={[styles.cellNumber, { backgroundColor: bgColor }]}>
        <Text style={styles.bold}> {idx == null ? null : idx + 1} </Text>
      </View>
      <View style={[styles.word, { backgroundColor: bgColor }]}>
        <Text style={styles.bold}> {item} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wordCell: {
    flex: 1 / 2,
    // borderColor: "blue",
    // borderWidth: 1,
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

export default WordCellValidation;
