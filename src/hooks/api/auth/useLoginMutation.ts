import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "./../../../api/auth/login";
import { useCustomSnackbar } from "../../common/useCustomSnackbar";

interface IuseLoginMutation {
  handleLoginErrorChange: (boolean: boolean) => void;
}
export const useLoginMutation = ({
  handleLoginErrorChange,
}: IuseLoginMutation) => {
  const navigate = useNavigate();
  const loginSuccessSnackbar = useCustomSnackbar({
    isSuccess: true,
    message: "로그인 성공",
  });
  const loginFailSnackbar = useCustomSnackbar({
    isSuccess: false,
    message: "로그인 실패",
  });

  return useMutation(login, {
    onSuccess: () => {
      loginSuccessSnackbar();
      navigate("/");
    },
    onError: () => {
      loginFailSnackbar();
      handleLoginErrorChange(true);
    },
  });
};
