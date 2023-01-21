import { createSlice } from "@reduxjs/toolkit";

export const pagination = createSlice({
  name: "page",

  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = pagination.actions;

export default pagination.reducer;
