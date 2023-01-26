import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../../../store/store";
import { deleteTodo } from "../../../api/todo/deleteTodo";
import { todoSlice } from "./../../../store/todoSlice";
import { useCustomSnackbar } from "./../../common/useCustomSnackbar";
import { IMutationError } from "../../../types/mutationTypes";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { resetSelectedTodo } = todoSlice.actions;
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      queryClient.invalidateQueries({ queryKey: ["getTodoById"] });
      dispatch(resetSelectedTodo());
      customSnackbar({
        isSuccess: true,
        message: "Todo 삭제 완료",
      });
    },
    onError: (error: IMutationError) => {
      customSnackbar({
        isSuccess: false,
        message: `${error.response.data.details}`,
      });
    },
  });
};
