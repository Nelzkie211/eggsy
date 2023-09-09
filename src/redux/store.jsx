// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";

export const store = configureStore({
  reducer: {
    nav: navigationSlice,
  },
});
