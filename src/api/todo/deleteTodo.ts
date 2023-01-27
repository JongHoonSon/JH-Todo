import { DELETE_TODO_BY_ID_URL } from "./../../constants/apiUrls";
import { customAxios } from "./../common/customAxios";

interface deleteTodoByIdProps {
  todoId: string;
}

export const deleteTodo = ({ todoId }: deleteTodoByIdProps) => {
  return customAxios.delete(DELETE_TODO_BY_ID_URL(todoId));
};
