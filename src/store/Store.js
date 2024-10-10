import { configureStore } from "@reduxjs/toolkit";
import { switchThemeReducer } from "./ThemeSwitcherReducer";

export const store = configureStore({
  reducer: {
    theme: switchThemeReducer,
  },
});
