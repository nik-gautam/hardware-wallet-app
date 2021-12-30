import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { providers, Wallet, utils } from "ethers";
import { formatEther } from "ethers/lib/utils";

export const createWallet = createAsyncThunk(
  "wallet/createWallet",
  async () => {
    let provider = new providers.JsonRpcProvider("http://127.0.0.1:8545");
    let newWallet = Wallet.createRandom();

    newWallet = newWallet.connect(provider);

    // console.log(newWallet.mnemonic);

    let newAddress = await newWallet.getAddress();

    return {
      wallet: newWallet,
      address: newAddress,
    };
  }
);

export const restoreWallet = createAsyncThunk(
  "wallet/restoreWallet",
  async (mnemonic) => {
    let provider = new providers.JsonRpcProvider("http://127.0.0.1:8545");
    let newWallet = Wallet.fromMnemonic(mnemonic);

    newWallet = newWallet.connect(provider);

    try {
      let address = await newWallet.getAddress();
      let balance = await newWallet.getBalance();

      console.log(newWallet, address, formatEther(balance));

      return {
        wallet: newWallet,
        address,
        balance: "0",
      };
    } catch (error) {
      console.log(error);
    }
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
      gasPrice: gas * 1000,
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
    mnemonic: [],
    isLoggedIn: false,
    balance: "0",
    lastTxn: "",
  },
  reducers: {
    // getWallet(state, action) {},
    // getProvider(state, action) {},
    removeWallet(state, action) {
      state.wallet = null;
      state.address = "";
      state.mnemonic = [];
      state.isLoggedIn = false;
      state.balance = 0;
      state.lastTxn = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.pending, (state, action) => {
        state.loading.createNewWallet = true;
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.loading.createNewWallet = false;
        // state.isLoggedIn = true;
        state.wallet = action.payload.wallet;
        state.address = action.payload.address;
        state.mnemonic = action.payload.wallet.mnemonic.phrase.split(" ");
      })
      .addCase(restoreWallet.pending, (state, action) => {
        state.loading.restoreWallet = true;
      })
      .addCase(restoreWallet.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.address = action.payload.address;
        // state.isLoggedIn = true;
        // state.balance = action.payload.balance;
        state.wallet = action.payload.wallet;

        state.loading.restoreWallet = false;
      })
      .addCase(restoreWallet.rejected, (state, action) => {
        console.log("Restore Failed");
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

const { actions, reducer } = walletSlice;

export const { removeWallet } = actions;

export default reducer;
