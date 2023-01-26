import { createSlice } from "@reduxjs/toolkit";
import { themeModeType } from "../types/themeTypes";
import { getThemeModeFromLocalStorage } from "../styles/themeStyles";

interface themeState {
  currentThemeMode: themeModeType;
}

const themeInitialState: themeState = {
  currentThemeMode: getThemeModeFromLocalStorage(),
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
