import React from "react";
import { View, Text, StyleSheet, NativeModules } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colours } from "../../assets/colours/Colours";
import { removeWallet } from "../reducers/wallet";
import SingleButtonFilled from "./../components/SingleButtonFilled";

const Settings = ({ navigation }) => {
  const { isLoggedIn } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={[styles.field, styles.row]}>
        <Text style={styles.attribute}>Logged in</Text>
        {isLoggedIn == true ? <Text>true</Text> : <Text>false</Text>}
      </View>

      <SingleButtonFilled
        text="Log out"
        onPress={() => {
          dispatch(removeWallet());
          // navigation.popToTop();
          // navigation.navigate("RecoveryNavigator", {
          //   screen: "Cover",
          // });
          // navigation.setOptions({
          //   tabBarVisible: false
          // });
      
          // navigation.navigate("RN", { screen: "Cover" });
          // CodePush.restartApp();
          NativeModules.DevSettings.reload();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 10,
  },
  title: {
    // borderWidth: 1,
    // borderColor: "green",
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  field: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: Colours.Neutral_4,
  },
  attribute: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Settings;
