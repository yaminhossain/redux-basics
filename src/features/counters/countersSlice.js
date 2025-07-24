import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    incerement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload); // Getting ID from action.payload
      state[counterIndex].value++; //mutating the value
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { incerement, decrement } = countersSlice.actions;
