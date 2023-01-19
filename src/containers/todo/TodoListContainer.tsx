import { useAppDispatch } from "../../store/store";
import { todoSlice } from "../../store/todoSlice";
import { ITodo } from "../../types/todo";
import { TodoList } from "../../components/todo/TodoList";

export const TodoListContainer = () => {
  const dispatch = useAppDispatch();
  const { setSelectedTodo, setTodoEditFormOpen } = todoSlice.actions;

  const handleSelectedTodoChange = (newTodo: ITodo) => {
    dispatch(setSelectedTodo(newTodo));
  };

  const handleTodoEditFormOpenChange = (boolean: boolean) => {
    dispatch(setTodoEditFormOpen(boolean));
  };

  return (
    <TodoList
      handleSelectedTodoChange={handleSelectedTodoChange}
      handleTodoEditFormOpenChange={handleTodoEditFormOpenChange}
    ></TodoList>
  );
};
