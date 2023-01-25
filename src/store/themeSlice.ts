import { createSlice } from "@reduxjs/toolkit";
import { getThemeMode, themeModeType } from "./../styles/theme";

interface themeState {
  themeMode: themeModeType;
}

const themeInitialState: themeState = {
  themeMode: getThemeMode(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    changeThemeMode(state, action) {
      return { ...state, themeMode: action.payload };
    },
  },
});
