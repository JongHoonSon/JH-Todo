import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "./../../../api/auth/login";
import { useCustomSnackbar } from "../../common/useCustomSnackbar";
import { IMutationError } from "../../../types/mutationType";

interface IuseLoginMutation {
  handleLoginErrorChange: (boolean: boolean) => void;
}
export const useLoginMutation = ({
  handleLoginErrorChange,
}: IuseLoginMutation) => {
  const navigate = useNavigate();
  const { customSnackbar } = useCustomSnackbar();

  return useMutation(login, {
    onSuccess: () => {
      customSnackbar({
        isSuccess: true,
        message: "로그인 성공",
      });
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
