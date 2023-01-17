import { TodoPage } from "../../pages/todo/TodoPage";
import { useAppSelector } from "./../../store/store";
import { useAuthentication } from "./../../hook/useAuthentication";

export const TodoPageContainer = () => {
  useAuthentication();
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  return <TodoPage isUserLoggedIn={isUserLoggedIn}></TodoPage>;
};
