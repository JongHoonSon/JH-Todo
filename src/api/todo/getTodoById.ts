import axios from "axios";
import { GET_TODO_BY_ID } from "../../constants/apiUrls";

interface getTodoByIdProps {
  todoId: string;
}

export const getTodoById = ({ todoId }: getTodoByIdProps) => {
  return axios
    .get(GET_TODO_BY_ID(todoId), {
      headers: {
        Authorization: window.localStorage.getItem("jwt"),
      },
    })
    .then((res) => {
      console.log("res.data get todo by id");
      console.log(res.data);
      return res.data.data;
    });
};
