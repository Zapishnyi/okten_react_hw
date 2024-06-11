import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  value: number;
}

const initialState: ICounter = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      ++state.value;
    },
    decrement: (state) => {
      --state.value;
    },
    customValueChange: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, customValueChange } = counter.actions;
