import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice.js";
import scoreSlice from "./scoreSlice.js"

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    score: scoreSlice,
  },
});

export default store;