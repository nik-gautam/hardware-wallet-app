import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colours } from "../../assets/colours/Colours";
import { useDispatch, useSelector } from "react-redux";
import { setError, setInputSequence } from "../reducers/onboarding";

const WordCellInput = ({
  index,
  item,
  setStatus,
  inputSequence,
  setInputSequence,
}) => {
  //   const [bgColor, setBgColor] = useState(Colours.Neutral_4);
  //   const [idx, setIdx] = useState(index);

  //   const dispatch = useDispatch();
  //   const { mnemonic, inputSequence, error } = useSelector(
  //     (state) => state.onboarding
  //   );

  //   let onClick = () => {
  //     if (error == false) {
  //       let i = inputSequence.length;

  //       if (mnemonic[i] == item) {
  //         correctWord(i);
  //       } else {
  //         wrongWord();
  //       }
  //     }
  //   };

  //   let correctWord = (index) => {
  //     setBgColor(Colours.Green);
  //     setIdx(index);

  //     let prevLen = inputSequence.length;
  //     dispatch(setInputSequence([...inputSequence, item]));

  //     if (prevLen + 1 == mnemonic.length) {
  //       setStatus(true);
  //       setTitle("Perfect. Make sure to securely store your recovery phrase.");
  //     }
  //   };

  //   let wrongWord = () => {
  //     setBgColor(Colours.Red);
  //     dispatch(setError(true));
  //     setTitle("Sorry, that’s not the correct sequence. Give it another try.");
  //     dispatch(setInputSequence([]));
  //   };

  let onChange = async (index, value) => {
    // console.log(index + " --> " + value);

    await changeSequence(index, value);
    // console.log(inputSequence);

    let flag = true;
    inputSequence.forEach((word) => {
      if (word === "") {
        flag = false;
      }
    });
    setStatus(flag);
  };

  let changeSequence = async (index, value) => {
    inputSequence[index] = value;
    setInputSequence(inputSequence);
  };

  return (
    <View style={styles.wordCell}>
      <View style={styles.cellNumber}>
        <Text style={[styles.bold, styles.cellText]}> {index + 1} </Text>
      </View>
      <View style={styles.word}>
        <TextInput
          style={[styles.bold, styles.textInput, styles.cellText]}
          onChangeText={(text) => onChange(index, text)}
          placeholder="Type..."></TextInput>
      </View>
    </View>
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
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colours.Neutral_4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 1,
  },
  word: {
    flex: 4,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colours.Neutral_4,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // borderWidth: 1,
    // borderColor: "orange",
  },
  bold: {
    fontWeight: "bold",
  },
  textInput: {
    alignSelf: "stretch",
  },
  cellText: {
    fontSize: 12,
  },
});

export default WordCellInput;
