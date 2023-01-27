import { GET_TODOS_URL } from "../../constants/apiUrls";
import { customAxios } from "./../common/customAxios";

export const getTodos = () => {
  return customAxios.get(GET_TODOS_URL).then((res) => {
    return res.data.data;
  });
};
