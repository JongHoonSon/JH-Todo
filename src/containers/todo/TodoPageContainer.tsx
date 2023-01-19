import { useAppSelector } from "../../store/store";
import { TodoPage } from "./../../pages/todo/TodoPage";

export const TodoPageContainer = () => {
  const { isTodoEditFormOpen } = useAppSelector((state) => state.todo);

  return <TodoPage isTodoEditFormOpen={isTodoEditFormOpen}></TodoPage>;
};
