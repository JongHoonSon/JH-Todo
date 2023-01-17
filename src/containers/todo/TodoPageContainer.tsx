import { TodoPage } from "../../pages/todo/TodoPage";
import { useAppDispatch, useAppSelector } from "./../../store/store";
import { useAuthentication } from "./../../hook/useAuthentication";
import { todoSlice } from "../../store/todoSlice";
import { ITodo } from "./../../types/todo";

export const TodoPageContainer = () => {
  useAuthentication();

  const { isUserLoggedIn } = useAppSelector((state) => state.auth);
  const { selectedTodo } = useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();
  const { setSelectedTodo } = todoSlice.actions;

  const handleSelectedTodoChange = (newTodo: ITodo) => {
    dispatch(setSelectedTodo(newTodo));
  };

  return (
    <TodoPage
      isUserLoggedIn={isUserLoggedIn}
      selectedTodo={selectedTodo}
      handleSelectedTodoChange={handleSelectedTodoChange}
    ></TodoPage>
  );
};
