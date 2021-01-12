import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export default counterSlice.reducer;
export const {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} = counterSlice.actions;
