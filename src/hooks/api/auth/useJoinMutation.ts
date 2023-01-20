import { useMutation } from "@tanstack/react-query";
import { join } from "../../../api/auth/join";
import { useNavigate } from "react-router-dom";
import { useCustomSnackbar } from "./../../common/useCustomSnackbar";
import { IMutationError } from "./../../../types/mutationType";

export const useJoinMutation = () => {
  const navigate = useNavigate();
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(join, {
    onSuccess: () => {
      customSnackbar({
        isSuccess: true,
        message: "회원가입 성공",
      });
      navigate("/");
    },
    onError: (error: IMutationError) => {
      customSnackbar({
        isSuccess: false,
        message: `${error.response.data.details}`,
      });
    },
  });
};
