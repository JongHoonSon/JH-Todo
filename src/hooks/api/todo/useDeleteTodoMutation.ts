import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../../api/todo/deleteTodo";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      queryClient.invalidateQueries({ queryKey: ["getTodoById"] });
    },
    onError: (error) => {
      console.log("onError");
      console.log("error", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
};
