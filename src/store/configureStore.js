import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const createStore = configureStore({
  reducer: rootReducer,
  devToolsEnhancer,
});
