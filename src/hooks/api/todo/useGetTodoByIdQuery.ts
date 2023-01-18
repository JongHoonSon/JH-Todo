import { useQuery } from "@tanstack/react-query";
import { getTodoById } from "../../../api/todo/getTodoById";
import { ITodo } from "./../../../types/todo";

export const useGetTodoByIdQuery = (selectedTodo: ITodo | undefined) => {
  return useQuery<ITodo | undefined>(
    ["getTodoById", `${selectedTodo?.id}`],
    () =>
      getTodoById(
        selectedTodo === undefined
          ? { todoId: "0" }
          : { todoId: selectedTodo.id }
      )
  );
};
