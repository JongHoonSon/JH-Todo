import styled from "styled-components";
import { ITodo } from "./TodoList";

export const TodoListItem = (todo: ITodo) => {
  return <Container>{todo.content}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`;
