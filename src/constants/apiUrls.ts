const BASE_URL =
  process.env.NODE_ENV === "development" ? "" : "http://localhost:8080";

console.log("BASE_URL");
console.log(BASE_URL);

// auth
export const JOIN_URL = `${BASE_URL}/users/create`;
export const LOGIN_URL = `${BASE_URL}/users/login`;

// todo
export const GET_TODOS_URL = `${BASE_URL}/todos`;
export const GET_TODO_BY_ID_URL = (todoId: string) =>
  `${BASE_URL}/todos/${todoId}`;
export const CREATE_TODO_URL = `${BASE_URL}/todos`;
export const UPDATE_TODO_BY_ID_URL = (todoId: string) =>
  `${BASE_URL}/todos/${todoId}`;
export const DELETE_TODO_BY_ID_URL = (todoId: string) =>
  `${BASE_URL}/todos/${todoId}`;
