import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";

const Store = configureStore({
  reducer: {
    userDetails: userData.reducer,
  },
});

export default Store;
