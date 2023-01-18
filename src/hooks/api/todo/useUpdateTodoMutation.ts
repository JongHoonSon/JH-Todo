import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../../../api/todo/updateTodo";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
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
