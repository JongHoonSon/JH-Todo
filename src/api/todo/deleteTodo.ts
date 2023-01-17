import { DELETE_TODO_BY_ID } from "./../../constants/apiUrls";
import axios from "axios";

interface deleteTodoByIdProps {
  todoId: string;
}

export const deleteTodo = ({ todoId }: deleteTodoByIdProps) => {
  return axios
    .delete(DELETE_TODO_BY_ID(todoId), {
      headers: {
        Authorization: window.localStorage.getItem("jwt"),
      },
    })
    .then((res) => {
      console.log("res.data delete todo");
      console.log(res.data);
      return res.data.data;
    });
};