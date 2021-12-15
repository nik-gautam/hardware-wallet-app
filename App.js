import "./shim"

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { TabNavigation } from "./src/navigators/TabNavigation";
import { enableScreens } from "react-native-screens";
import Web3 from 'web3';

enableScreens(true);

const App = () => {
  
  const web3 = new Web3('http://localhost:8545');
  const newWallet = web3.eth.accounts.wallet.create(1);
  const newAccount = newWallet[0];
  
  console.log(newAccount);   

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

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
