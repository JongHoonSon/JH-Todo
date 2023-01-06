import styled from "styled-components";
import { ITodo } from "../../types/todo";

interface TodoListProps {
  todos: ITodo[] | undefined;
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Container>
      {todos ? (
        todos.map((todo) => (
          <TodoListItem key={todo.createdAt}>{todo.content}</TodoListItem>
        ))
      ) : (
        <div>empty</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const TodoListItem = styled.div`
  width: 100px;
  height: 50px;
  background-color: green;
`;
