import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    mnemonic: [
      "answer",
      "common",
      "make",
      "label",
      "nut",
      "lion",
      "mirror",
      "flame",
      "seven",
      "anxiety",
      "west",
      "receive",
    ],
    inputSequence: [],
    error: false,
    random: Math.random(),
  },
  reducers: {
    setMnemonic(state, action) {
      state.mnemonic = action.payload;
    },
    setInputSequence(state, action) {
      state.inputSequence = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setRandom(state, action) {
      state.random = Math.random();
    },
  },
});

const { actions, reducer } = onboardingSlice;

export const { setMnemonic, setInputSequence, setError, setRandom } = actions;

export default reducer;
