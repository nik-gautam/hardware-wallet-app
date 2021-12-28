import "react-native-get-random-values";

import "./shim";
import "@ethersproject/shims";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { TabNavigation } from "./src/navigators/TabNavigation";
import { enableScreens } from "react-native-screens";
import RecoveryNavigator from "./src/navigators/RecoveryNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

enableScreens(true);

const App = () => {
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
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? <TabNavigation /> : <RecoveryNavigator />}

        {/* <TabNavigation /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
