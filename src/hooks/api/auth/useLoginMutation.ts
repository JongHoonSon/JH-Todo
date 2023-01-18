import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "./../../../api/auth/login";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation(login, {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log("data", data);
      navigate("/");
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
