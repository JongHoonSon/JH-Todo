import axios from "axios";
import { CREATE_TODO_URL } from "../../constants/apiUrls";

interface createTodoProps {
  todoTitle: string;
  todoContent: string;
}

export const createTodo = ({ todoTitle, todoContent }: createTodoProps) => {
  return axios
    .post(
      CREATE_TODO_URL,
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
