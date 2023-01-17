import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "./../types/todo";

interface todoState {
  selectedTodo: ITodo | undefined;
}

const todoInitialState: todoState = {
  selectedTodo: undefined,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    setSelectedTodo(state, action) {
      return { ...state, selectedTodo: action.payload };
    },
  },
});
