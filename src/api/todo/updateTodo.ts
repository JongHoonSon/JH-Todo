import { UPDATE_TODO_BY_ID_URL } from "./../../constants/apiUrls";
import axios from "axios";

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
  return axios.put(
    UPDATE_TODO_BY_ID_URL(todoId),
    { title: todoTitle, content: todoContent },
    {
      headers: {
        Authorization: window.localStorage.getItem("jwt"),
      },
    }
  );
};
