import { configureStore } from "@reduxjs/toolkit";
import loveReducer from "./slices/AddMovie";
import languageSlice from "./slices/ChangeLanguage";

export default configureStore({
  reducer: {
    love: loveReducer,
    language: languageSlice,
  },
});
