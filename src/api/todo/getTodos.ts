import axios from "axios";
import { GET_TODOS_URL } from "../../constants/apiUrls";

export const getTodos = () => {
  return axios
    .get(GET_TODOS_URL, {
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
