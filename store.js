// store.js

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice with initial state and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions generated from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Create the Redux store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
