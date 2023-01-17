import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todoSlice } from "./todoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
