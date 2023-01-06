import axios from "axios";
import { GET_TODOS } from "../../constants/apiUrls";

export const getTodos = () => {
  return axios
    .get(GET_TODOS, {
      headers: {
        Authorization: window.localStorage.getItem("jwt"),
      },
    })
    .then((res) => {
      console.log("res.data get todos");
      console.log(res.data);
      return res.data.data;
    });
};
