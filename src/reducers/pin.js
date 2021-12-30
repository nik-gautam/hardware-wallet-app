import { createSlice } from "@reduxjs/toolkit";

const pinSlice = createSlice({
  name: "pin",
  initialState: {
    pinHash: "",
    pin: "",
  },
  reducers: {
    setPinHash(state, action) {
      state.pinHash = action.payload.hash;
    },
  },
});

const { actions, reducer } = pinSlice;

export const { setPinHash } = actions;
export default reducer;
