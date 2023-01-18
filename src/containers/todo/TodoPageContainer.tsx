import { TodoPage } from "../../pages/todo/TodoPage";
import { useAppSelector } from "./../../store/store";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";

export const TodoPageContainer = () => {
  useAuthenticateUser();

  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <TodoPage isUserLoggedIn={isUserLoggedIn}></TodoPage>;
};
