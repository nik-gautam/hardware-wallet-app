import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../reducers/onboarding";
import WordCellInput from "../../components/WordCellInput";

const RestoreValidate = ({ navigation, route }) => {
  //   const dispatch = useDispatch();
  const { mnemonic, error, random } = useSelector((state) => state.onboarding);

  let words = [...mnemonic];

  const [status, setStatus] = useState(false); // for the continue button
  const [inputSequence, setInputSequence] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  let onPress = () => {
    // pending
    let userSequence = [...inputSequence];
    // check if valid sequence

    // IF VALID THEN NAVIGATE
    navigation.navigate("WalletPinChoice");

    // ELSE, ERROR SCREEN
    //   navigation.navigate("RestoreError");
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>
          Confirm your recovery phrase by typing each word.
        </Text>
      </View>

      <View style={styles.wordsContainer}>
        <FlatList
          style={styles.words}
          data={words}
          renderItem={({ item, index }) => (
            <WordCellInput
              item={item}
              index={index}
              setStatus={setStatus}
              inputSequence={inputSequence}
              setInputSequence={setInputSequence}
            />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        status={status}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 15,
    // borderWidth: 1,
    // borderColor: "black",
  },
  text: {
    // borderColor: "green",
    // borderWidth: 1,
  },
  title: {
    fontFamily: "inter-semi-bold",
    fontSize: 21,
    marginBottom: 15,
  },
  description: {
    fontFamily: "inter-regular",
    fontSize: 18,
    marginBottom: 15,
    color: Colours.Neutral_7,
  },
  wordsContainer: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
  },
  words: {},
  button: {},
});

export default RestoreValidate;
