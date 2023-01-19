import { useAppDispatch } from "../../store/store";
import { todoSlice } from "../../store/todoSlice";
import { ITodo } from "../../types/todo";
import { TodoListItem } from "../../components/todo/TodoListItem";

interface TodoListItemContainerProps {
  key: string;
  todo: ITodo;
}

export const TodoListItemContainer = ({
  key,
  todo,
}: TodoListItemContainerProps) => {
  const dispatch = useAppDispatch();
  const { setSelectedTodo, setTodoEditFormOpen } = todoSlice.actions;

  const handleSelectedTodoChange = (newTodo: ITodo) => {
    dispatch(setSelectedTodo(newTodo));
  };

  const handleTodoEditFormOpenChange = (boolean: boolean) => {
    dispatch(setTodoEditFormOpen(boolean));
  };

  return (
    <TodoListItem
      handleSelectedTodoChange={handleSelectedTodoChange}
      handleTodoEditFormOpenChange={handleTodoEditFormOpenChange}
      key={key}
      todo={todo}
    ></TodoListItem>
  );
};
