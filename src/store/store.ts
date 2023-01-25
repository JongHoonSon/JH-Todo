import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todoSlice } from "./todoSlice";
import { themeSlice } from "./themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    theme: themeSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
