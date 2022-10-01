import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { Colours } from "../../../assets/colours/Colours";
import WordCell from "../../components/WordCell";
import SingleButtonFilled from "./../../components/SingleButtonFilled";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonic } from "../../reducers/onboarding";
import ViewShot from "react-native-view-shot";
import { useRef } from "react";
import CameraRoll from "@react-native-community/cameraroll";

const Copy = ({ navigation }) => {
  // const { mnemonic } = useSelector((state) => state.onboarding);
  const dispatch = useDispatch();
  const { mnemonic } = useSelector((state) => state.wallet);
  const viewShotRef = useRef();

  let words = mnemonic;

  console.log(words);

  const hasPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  const captureSS = () => {
    // console.log(viewShotRef.cu);

    viewShotRef.current
      .capture()
      .then(async (uri) => {
        console.log("Capture URI:- ", uri);

        if (Platform.OS === "android" && !(await hasPermission())) {
          return;
        }

        CameraRoll.save(uri, { type: "photo" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <ViewShot
      ref={viewShotRef}
      // onCapture={(uri) => console.log(uri)}
      // captureMode="mount"
      options={{ format: "jpg", quality: 0.9 }}
      style={styles.container}
    >
      {/* <View> */}
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

      <SingleButtonFilled
        text="Download as ScreenShot"
        style={styles.button}
        onPress={captureSS}
      />

      <SingleButtonFilled
        text="Continue"
        style={styles.button}
        onPress={() => {
          dispatch(setMnemonic(mnemonic));

          navigation.navigate("RecoveryValidateIntro");
        }}
      />
      {/* </View> */}
    </ViewShot>
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
