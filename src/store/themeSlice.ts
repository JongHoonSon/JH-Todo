import { createSlice } from "@reduxjs/toolkit";
import { getCurrentThemeMode, themeModeType } from "./../styles/theme";

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
