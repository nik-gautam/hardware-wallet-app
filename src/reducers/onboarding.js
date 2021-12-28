import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    mnemonic:
      "answer common make label nut lion mirror flame seven anxiety west receive",
  },
  reducers: {
    setMnemonic(state, action) {
      state.mnemonic = action.payload;
    },
  },
});

const { actions, reducer } = onboardingSlice;

export const { setMnemonic } = actions;

export default reducer;
