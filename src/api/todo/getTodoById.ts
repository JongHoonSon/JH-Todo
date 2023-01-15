import axios from "axios";
import { GET_TODO_BY_ID } from "../../constants/apiUrls";

interface getTodoByIdPros {
  todoId: string;
}

export const getTodoById = ({ todoId }: getTodoByIdPros) => {
  return axios
    .get(GET_TODO_BY_ID(todoId), {
      headers: {
        Authorization: window.localStorage.getItem("jwt"),
      },
    })
    .then((res) => {
      console.log("res.data get todos");
      console.log(res.data);
      return res.data.data;
    });
};
