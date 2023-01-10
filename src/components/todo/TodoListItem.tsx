import styled from "styled-components";
import { ITodo } from "./../../types/todo";

interface TodoListItemProps {
  todo: ITodo;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  return (
    <Container>
      <span>{todo.title}</span>
      <span>{todo.content}</span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
