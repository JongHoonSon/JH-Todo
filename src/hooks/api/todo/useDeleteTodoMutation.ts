import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../../../store/store";
import { deleteTodo } from "../../../api/todo/deleteTodo";
import { todoSlice } from "./../../../store/todoSlice";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { setSelectedTodo } = todoSlice.actions;

  return useMutation(deleteTodo, {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      queryClient.invalidateQueries({ queryKey: ["getTodoById"] });
      dispatch(setSelectedTodo(undefined));
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
