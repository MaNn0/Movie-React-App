import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentLanguage: "English",
  availableLanguages: ["English", "Arabic"],
};
const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = language.actions;
export default language.reducer;
