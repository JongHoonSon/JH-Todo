import { TodoPage } from "../../pages/todo/TodoPage";
import { useAppDispatch, useAppSelector } from "./../../store/store";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";
import { todoSlice } from "../../store/todoSlice";
import { ITodo } from "./../../types/todo";

export const TodoPageContainer = () => {
  useAuthenticateUser();

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
