import axios from "axios";
import { LOGIN } from "../../constants/apiUrls";

interface loginProps {
  emailInputValue: string;
  passwordInputValue: string;
}

export const login = ({ emailInputValue, passwordInputValue }: loginProps) => {
  return axios
    .post(LOGIN, {
      email: emailInputValue,
      password: passwordInputValue,
    })
    .then((res) => {
      console.log("res.data login");
      console.log(res.data);
      window.localStorage.setItem("jwt", res.data.token);
    });
};
