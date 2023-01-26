import { useAppDispatch } from "../../store/store";
import { todoSlice } from "../../store/todoSlice";
import { ITodo } from "../../types/todoTypes";
import { TodoList } from "../../components/todo/TodoList";
import { useAppSelector } from "./../../store/store";

export const TodoListContainer = () => {
  const { selectedTodo } = useAppSelector((state) => state.todo);

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
      selectedTodo={selectedTodo}
      handleSelectedTodoChange={handleSelectedTodoChange}
      handleTodoEditFormOpenChange={handleTodoEditFormOpenChange}
    ></TodoList>
  );
};
