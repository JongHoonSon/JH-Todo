import axios from "axios";
import { JOIN_URL } from "./../../constants/apiUrls";

interface joinProps {
  emailInputValue: string;
  passwordInputValue: string;
}

export const join = ({ emailInputValue, passwordInputValue }: joinProps) => {
  return axios.post(JOIN_URL, {
    email: emailInputValue,
    password: passwordInputValue,
  });
};
