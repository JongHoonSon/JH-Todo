import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../../../api/todo/createTodo";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createTodo, {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
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
