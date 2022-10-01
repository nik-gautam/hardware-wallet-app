import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import walletReducer from "../reducers/wallet";
import onboardingReducer from "../reducers/onboarding";
import pinReducer from "../reducers/pin";
import { etherscanApi } from "../apis/etherscan";
import { persistReducer } from "redux-persist";
import { currencyApi } from "../apis/currency";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const reducers = combineReducers({
  [etherscanApi.reducerPath]: etherscanApi.reducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
  onboarding: onboardingReducer,
  wallet: walletReducer,
  pin: pinReducer,
});

const persReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(etherscanApi.middleware)
      .concat(currencyApi.middleware),
});

export default store;
