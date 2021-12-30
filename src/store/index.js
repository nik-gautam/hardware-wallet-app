import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import walletReducer from "../reducers/wallet";
import onboardingReducer from "../reducers/onboarding";
import { etherscanApi } from "../apis/etherscan";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   version: 1,
// };

const store = configureStore({
  reducer: {
    [etherscanApi.reducerPath]: etherscanApi.reducer,
    onboarding: onboardingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(etherscanApi.middleware),
});

export default store;
