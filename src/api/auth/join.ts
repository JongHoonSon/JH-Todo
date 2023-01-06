import axios from "axios";
import { JOIN } from "./../../constants/apiUrls";

interface joinProps {
  emailInputValue: string;
  passwordInputValue: string;
}

export const join = ({ emailInputValue, passwordInputValue }: joinProps) => {
  return axios
    .post(JOIN, {
      email: emailInputValue,
      password: passwordInputValue,
    })
    .then((res) => {
      console.log("res.data join");
      console.log(res.data);
    });
};
