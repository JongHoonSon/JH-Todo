import { useAppDispatch, useAppSelector } from "../../store/store";
import { TodoEditForm } from "./../../components/todo/TodoEditForm";
import { todoSlice } from "./../../store/todoSlice";

export const TodoEditFormContainer = () => {
  const { selectedTodo } = useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();
  const { setTodoEditFormOpen } = todoSlice.actions;

  const handleTodoEditFormOpenChange = (boolean: boolean) => {
    dispatch(setTodoEditFormOpen(boolean));
  };

  return (
    <TodoEditForm
      selectedTodo={selectedTodo}
      handleTodoEditFormOpenChange={handleTodoEditFormOpenChange}
    ></TodoEditForm>
  );
};
