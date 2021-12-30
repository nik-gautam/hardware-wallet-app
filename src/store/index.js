import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import walletReducer from "../reducers/wallet";
import onboardingReducer from "../reducers/onboarding";
import pinReducer from "../reducers/pin";
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
    wallet: walletReducer,
    pin: pinReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      etherscanApi.middleware
    ),
});

export default store;
