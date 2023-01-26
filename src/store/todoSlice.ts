import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/todoTypes";

interface todoState {
  selectedTodo: ITodo | undefined;
  isTodoEditFormOpen: boolean;
}

const todoInitialState: todoState = {
  selectedTodo: undefined,
  isTodoEditFormOpen: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    resetSelectedTodo(state) {
      return { ...state, selectedTodo: undefined };
    },
    setSelectedTodo(state, action) {
      return { ...state, selectedTodo: action.payload };
    },
    setTodoEditFormOpen(state, action) {
      return { ...state, isTodoEditFormOpen: action.payload };
    },
  },
});
