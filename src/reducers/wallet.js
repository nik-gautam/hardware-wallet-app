import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createWallet = createAsyncThunk(
  "wallet/createWallet",
  async (provider) => {}
);

export const restoreWallet = createAsyncThunk(
  "wallet/restoreWallet",
  async (mnuemonic, provider) => {}
);

export const sendTransaction = createAsyncThunk(
  "wallet/sendTransaction",
  async (amount, wallet, provider) => {}
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    loading: "idle",
    wallet: null,
    provider: null,
    mnuemonic: "",
  },
  reducers: {
    getWallet(state, action) {},
    getProvider(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.fulfilled, (state, action) => {})
      .addCase(restoreWallet.fulfilled, (state, action) => {})
      .addCase(sendTransaction.fulfilled, (state, action) => {});
  },
});

const { action, reducer } = walletSlice;

export const { getWallet, getProvider } = action;

export default reducer;
