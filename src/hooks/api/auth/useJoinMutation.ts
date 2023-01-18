import { useMutation } from "@tanstack/react-query";
import { join } from "../../../api/auth/join";
import { useNavigate } from "react-router-dom";

export const useJoinMutation = () => {
  const navigate = useNavigate();

  return useMutation(join, {
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
