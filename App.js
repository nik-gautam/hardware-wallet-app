import "./shim";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { TabNavigation } from "./src/navigators/TabNavigation";
import { enableScreens } from "react-native-screens";
import RecoveryNavigator from "./src/navigators/RecoveryNavigator";
// import Web3 from "web3";
// import HDWallet from "truffle-hdwallet-provider";

enableScreens(true);

// let address = "http://127.0.0.1:8545";
// let mneumonic =
//   "whisper raise toy come face deposit jump dad eager need hand erode";

// const provider = new HDWallet(mneumonic, address);
// const web3 = new Web3(provider);

// let accounts;

// const fillAddresses = async () => {
//   accounts = await web3.eth.getAccounts();
// };

const App = () => {
  // fillAddresses();

  // console.log(accounts);

  const [fontLoaded] = useFonts({
    "inter-black": require("./assets/fonts/Inter-Black.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-extra-bold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "inter-extra-light": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "inter-light": require("./assets/fonts/Inter-Light.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-semi-bold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "inter-thin": require("./assets/fonts/Inter-Thin.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  let isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigation /> : <RecoveryNavigator />}

      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
