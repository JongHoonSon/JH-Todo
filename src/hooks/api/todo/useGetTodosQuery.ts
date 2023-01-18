import { useQuery } from "@tanstack/react-query";
import { ITodo } from "../../../types/todo";
import { getTodos } from "../../../api/todo/getTodos";

export const useGetTodosQuery = () => {
  return useQuery<ITodo[] | undefined>(["getTodos"], getTodos);
};
