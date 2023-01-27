import axios from "axios";
import { GET_TODO_BY_ID_URL } from "../../constants/apiUrls";

interface getTodoByIdProps {
  todoId: string;
}

export const getTodoById = ({ todoId }: getTodoByIdProps) => {
  return axios
    .get(GET_TODO_BY_ID_URL(todoId), {
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
    .then((res) => {
      return res.data.data;
    });
};
