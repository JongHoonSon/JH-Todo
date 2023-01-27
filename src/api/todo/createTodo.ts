import { CREATE_TODO_URL } from "../../constants/apiUrls";
import { customAxios } from "./../common/customAxios";

interface createTodoProps {
  todoTitle: string;
  todoContent: string;
}

export const createTodo = ({ todoTitle, todoContent }: createTodoProps) => {
  return customAxios.post(CREATE_TODO_URL, {
    title: todoTitle,
    content: todoContent,
  });
};
