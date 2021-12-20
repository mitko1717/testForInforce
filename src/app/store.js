import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import productsReducer from "../features/todo/productsSlice.js";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: productsReducer,
  },
});
