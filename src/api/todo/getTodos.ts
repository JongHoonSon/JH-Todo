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
      return res.data.data;
    });
};
