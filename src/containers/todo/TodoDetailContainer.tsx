import { useAppDispatch, useAppSelector } from "../../store/store";
import { TodoDetail } from "../../components/todo/TodoDetail";
import { todoSlice } from "./../../store/todoSlice";

export const TodoDetailContainer = () => {
  const { selectedTodo } = useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();
  const { setTodoEditFormOpen } = todoSlice.actions;

  const handleTodoEditFormOpenChange = (boolean: boolean) => {
    dispatch(setTodoEditFormOpen(boolean));
  };

  return (
    <TodoDetail
      selectedTodo={selectedTodo}
      handleTodoEditFormOpenChange={handleTodoEditFormOpenChange}
    ></TodoDetail>
  );
};
