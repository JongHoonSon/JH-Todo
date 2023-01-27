import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "./../../../api/auth/login";
import { useCustomSnackbar } from "../../common/useCustomSnackbar";
import { IMutationError } from "../../../types/mutationTypes";

interface IuseLoginMutation {
  handleLoginErrorChange: (boolean: boolean) => void;
}

export const useLoginMutation = ({
  handleLoginErrorChange,
}: IuseLoginMutation) => {
  const navigate = useNavigate();
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(login, {
    onSuccess: (data) => {
      customSnackbar({
        isSuccess: true,
        message: "로그인 성공",
      });
      localStorage.setItem("jwt", data.data.token);
      navigate("/");
    },
    onError: (error: IMutationError) => {
      customSnackbar({
        isSuccess: false,
        message: `${error.response.data.details}`,
      });
      handleLoginErrorChange(true);
    },
  });
};
