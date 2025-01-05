import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const loveSlice = createSlice({
  name: "love",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      //state k2nha usestate
      // action.payload = probs
      state.items.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = loveSlice.actions;
export default loveSlice.reducer;
