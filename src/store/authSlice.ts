import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isUserLoggedIn: boolean;
}

const authInitialState: authState = {
  isUserLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setIsUserLoggedIn(state, action) {
      return { ...state, isUserLoggedIn: action.payload };
    },
  },
});
