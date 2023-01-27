import { UPDATE_TODO_BY_ID_URL } from "./../../constants/apiUrls";
import { customAxios } from "../common/customAxios";

interface deleteTodoByIdProps {
  todoId: string;
  todoTitle: string;
  todoContent: string;
}

export const updateTodo = ({
  todoId,
  todoTitle,
  todoContent,
}: deleteTodoByIdProps) => {
  return customAxios.put(UPDATE_TODO_BY_ID_URL(todoId), {
    title: todoTitle,
    content: todoContent,
  });
};
