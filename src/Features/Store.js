import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./AppSlice";

// [step 4] create store to save data
export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});
