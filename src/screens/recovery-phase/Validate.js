import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import WordCellValidation from "../../components/WordCellValidation";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../reducers/onboarding";

const Validate = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { mnemonic, error, random } = useSelector((state) => state.onboarding);

  let words = [...mnemonic];
  words = shuffle(words, random);

  const [title, setTitle] = useState("Tap the words in the correct order.");
  const [status, setStatus] = useState(false); // for the continue button

  useEffect(() => {
    dispatch(setError(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.wordsContainer}>
        <FlatList
          style={styles.words}
          data={words}
          renderItem={({ item, index }) => (
            <WordCellValidation
              item={item}
              index={null}
              setTitle={setTitle}
              setStatus={setStatus}
            />
          )}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>

      {error ? (
        <SingleButtonFilled
          text="Retry"
          style={styles.button}
          onPress={() => {
            navigation.navigate("RecoveryValidateIntro");
          }}
        />
      ) : (
        <SingleButtonFilled
          text="Continue"
          style={styles.button}
          status={status}
          onPress={() => {
            navigation.navigate("WalletPinChoice");
          }}
        />
      )}
    </View>
  );
};

function shuffle(array, random) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(random * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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

export default Validate;
