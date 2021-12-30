import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import WordCell from "../../components/WordCell";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonic } from "../../reducers/onboarding";

const Copy = ({ navigation }) => {
  // const { mnemonic } = useSelector((state) => state.onboarding);
  const dispatch = useDispatch();
  const { mnemonic } = useSelector((state) => state.wallet);

  let words = mnemonic;

  console.log(words);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>This is your recovery phrase</Text>

        <Text style={styles.description}>
          Make sure to write it down as shown here. You have to verify this
          later.
        </Text>
      </View>

      <View style={styles.wordsContainer}>
        <FlatList
          style={styles.words}
          data={words}
          renderItem={({ item, index }) => (
            <WordCell item={item} index={index} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>

      <SingleButtonFilled text="Download as PDF" style={styles.button} />

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        onPress={() => {
          dispatch(setMnemonic(mnemonic));

          navigation.navigate("RecoveryValidateIntro");
        }}
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
    marginHorizontal: 10,
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
    marginHorizontal: 5,
    // borderColor: "red",
    // borderWidth: 1,
  },
  words: {},
  button: {},
});

export default Copy;
