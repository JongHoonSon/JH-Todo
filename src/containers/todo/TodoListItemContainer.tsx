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
  const { setSelectedTodo } = todoSlice.actions;

  const handleSelectedTodoChange = (newTodo: ITodo) => {
    dispatch(setSelectedTodo(newTodo));
  };

  return (
    <TodoListItem
      handleSelectedTodoChange={handleSelectedTodoChange}
      key={key}
      todo={todo}
    ></TodoListItem>
  );
};
