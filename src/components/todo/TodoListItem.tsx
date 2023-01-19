import styled from "styled-components";
import { ITodo } from "./../../types/todo";

interface TodoListItemProps {
  handleSelectedTodoChange: (newSelectedTodo: ITodo) => void;
  handleTodoEditFormOpenChange: (boolean: boolean) => void;
  todo: ITodo;
}

export const TodoListItem = ({
  todo,
  handleSelectedTodoChange,
  handleTodoEditFormOpenChange,
}: TodoListItemProps): React.ReactElement => {
  return (
    <Container
      onClick={() => {
        handleSelectedTodoChange(todo);
        handleTodoEditFormOpenChange(false);
      }}
    >
      <span>{todo.title}</span>
      <span>{todo.content}</span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: yellow;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  :hover {
    opacity: 0.5;
  }
`;
