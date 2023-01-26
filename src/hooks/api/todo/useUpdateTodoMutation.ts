import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../../../api/todo/updateTodo";
import { useCustomSnackbar } from "../../common/useCustomSnackbar";
import { IMutationError } from "../../../types/mutationTypes";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      queryClient.invalidateQueries({ queryKey: ["getTodoById"] });
      customSnackbar({
        isSuccess: true,
        message: "Todo 수정 완료",
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
