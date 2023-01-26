import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../../../api/todo/createTodo";
import { useCustomSnackbar } from "../../common/useCustomSnackbar";
import { IMutationError } from "../../../types/mutationTypes";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      customSnackbar({
        isSuccess: true,
        message: "Todo 생성 완료",
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
