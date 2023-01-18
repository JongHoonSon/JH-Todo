import { useAppSelector } from "../../store/store";
import { TodoDetail } from "../../components/todo/TodoDetail";

export const TodoDetailContainer = () => {
  const { selectedTodo } = useAppSelector((state) => state.todo);

  return <TodoDetail selectedTodo={selectedTodo}></TodoDetail>;
};
