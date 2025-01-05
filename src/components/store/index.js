import { configureStore } from "@reduxjs/toolkit";
import loveReducer from "./slices/AddMovie";

export default configureStore({
  reducer: {
    love: loveReducer,
  },
});
