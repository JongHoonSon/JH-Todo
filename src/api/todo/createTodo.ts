import axios from "axios";
import { CREATE_TODO } from "../../constants/apiUrls";

interface createTodoProps {
  todoTitle: string;
  todoContent: string;
}

export const createTodos = ({ todoTitle, todoContent }: createTodoProps) => {
  return axios
    .post(
      CREATE_TODO,
      { title: todoTitle, content: todoContent },
      {
        headers: {
          Authorization: window.localStorage.getItem("jwt"),
        },
      }
    )
    .then((res) => {
      console.log("res.data create todo");
      console.log(res.data);
      return res.data.data;
    });
};
