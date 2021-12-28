import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import walletReducer from "../reducers/wallet";
import onboardingReducer from "../reducers/onboarding";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   version: 1,
// };

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export default store;
