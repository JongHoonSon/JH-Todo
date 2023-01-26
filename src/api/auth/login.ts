import axios from "axios";
import { LOGIN_URL } from "../../constants/apiUrls";

interface loginProps {
  emailInputValue: string;
  passwordInputValue: string;
}

export const login = ({ emailInputValue, passwordInputValue }: loginProps) => {
  return axios.post(LOGIN_URL, {
    email: emailInputValue,
    password: passwordInputValue,
  });
};
