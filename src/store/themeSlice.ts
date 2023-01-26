import { createSlice } from "@reduxjs/toolkit";
import { themeModeType } from "../types/themeTypes";
import { getCurrentThemeMode } from "../styles/themeStyles";

interface themeState {
  currentThemeMode: themeModeType;
}

const themeInitialState: themeState = {
  currentThemeMode: getCurrentThemeMode(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    changeThemeMode(state, action) {
      return { ...state, currentThemeMode: action.payload };
    },
  },
});
