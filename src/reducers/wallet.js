import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { providers, Wallet, utils } from "ethers";

export const createWallet = createAsyncThunk(
  "wallet/createWallet",
  async (provider) => {
    let newWallet = Wallet.createRandom();
    newWallet.connect(provider);

    let newAddress = await newWallet.getAddress();

    return {
      wallet: newWallet,
      address: newAddress,
    };
  }
);

export const restoreWallet = createAsyncThunk(
  "wallet/restoreWallet",
  async (mnuemonic, provider) => {
    let wallet = Wallet.fromMnemonic(mnuemonic);
    wallet.connect(provider);

    let address = await wallet.getAddress();
    let balance = await wallet.getBalance();

    return {
      wallet,
      address,
      balance,
    };
  }
);

export const sendTransaction = createAsyncThunk(
  "wallet/sendTransaction",
  async ({ receiver, amount, gas, wallet, provider }) => {
    let gas_limit = "0x100000";
    let send_address = await wallet.getAddress();

    const tx = {
      from: send_address,
      to: receiver,
      value: utils.parseEther(amount.toString()),
      nonce: await provider.getTransactionCount(send_address, "latest"),
      gasLimit: utils.hexlify(gas_limit),
      gasPrice: gas,
    };

    const transaction = await wallet.sendTransaction(tx);

    return {
      success: true,
      transaction,
    };
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    loading: {
      createNewWallet: false,
      restoreWallet: false,
      sendTransaction: false,
    },
    wallet: null,
    provider: new providers.JsonRpcProvider("http://127.0.0.1:8545"),
    address: "",
    mnuemonic: "",
    isLoggedIn: false,
    balance: 0,
    lastTxn: "",
  },
  reducers: {
    getWallet(state, action) {},
    getProvider(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.pending, (state, action) => {
        state.loading.createNewWallet = true;
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.loading.createNewWallet = false;
        state.wallet = action.payload.wallet;
        state.address = action.payload.address;
      })
      .addCase(restoreWallet.pending, (state, action) => {
        state.loading.restoreWallet = true;
      })
      .addCase(restoreWallet.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.balance = action.payload.balance;
        state.wallet = action.payload.wallet;

        state.loading.restoreWallet = false;
      })
      .addCase(sendTransaction.pending, (state, action) => {
        state.loading.sendTransaction = true;
      })
      .addCase(sendTransaction.fulfilled, (state, action) => {
        state.loading.sendTransaction = false;
        state.lastTxn = action.payload.transaction;
      });
  },
});

const { action, reducer } = walletSlice;

export const { getWallet, getProvider } = action;

export default reducer;
