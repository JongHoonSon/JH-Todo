import { useAppSelector } from "../../store/store";
import { TodoEditForm } from "./../../components/todo/TodoEditForm";

export const TodoEditFormContainer = () => {
  const { selectedTodo } = useAppSelector((state) => state.todo);

  return <TodoEditForm selectedTodo={selectedTodo}></TodoEditForm>;
};
