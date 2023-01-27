import { GET_TODO_BY_ID_URL } from "../../constants/apiUrls";
import { customAxios } from "./../common/customAxios";

interface getTodoByIdProps {
  todoId: string;
}

export const getTodoById = ({ todoId }: getTodoByIdProps) => {
  return customAxios.get(GET_TODO_BY_ID_URL(todoId)).then((res) => {
    return res.data.data;
  });
};
