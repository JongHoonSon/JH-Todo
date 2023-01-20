import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "./../../../api/auth/login";

interface IuseLoginMutation {
  handleLoginErrorChange: (boolean: boolean) => void;
}

export const useLoginMutation = ({
  handleLoginErrorChange,
}: IuseLoginMutation) => {
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log("data", data);
      navigate("/");
    },
    onError: (error) => {
      console.log("onError");
      console.log("error", error);
      handleLoginErrorChange(true);
    },
  });
};
