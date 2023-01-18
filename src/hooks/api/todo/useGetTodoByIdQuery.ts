import { useQuery } from "@tanstack/react-query";
import { getTodoById } from "../../../api/todo/getTodoById";
import { ITodo } from "./../../../types/todo";

export const useGetTodoByIdQuery = (selectedTodo: ITodo | undefined) => {
  return useQuery<ITodo | undefined>(
    ["getTodoById", `${selectedTodo?.id}`],
    () => {
      if (selectedTodo === undefined) return;
      else return getTodoById({ todoId: selectedTodo.id });
    }
  );
};
