const BASE_URL = "http://localhost:8080";

// auth
export const JOIN = `${BASE_URL}/users/create`;
export const LOGIN = `${BASE_URL}/users/login`;

// todo
export const GET_TODOS = `${BASE_URL}/todos`;
export const GET_TODO_BY_ID = (todoId: string) => `${BASE_URL}/todos/${todoId}`;
export const CREATE_TODO = `${BASE_URL}/todos`;
export const UPDATE_TODO_BY_ID = (todoId: string) =>
  `${BASE_URL}/todos/${todoId}`;
export const DELETE_TODO_BY_ID = (todoId: string) =>
  `${BASE_URL}/todos/${todoId}`;
