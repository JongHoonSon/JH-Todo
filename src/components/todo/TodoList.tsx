import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: ITodo[] | undefined;
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Container>
      <TodoListHeader>
        <span>제목</span>
        <span>내용</span>
      </TodoListHeader>
      <TodoListContainer>
        {todos ? (
          todos.map((todo) => <TodoListItem key={todo.createdAt} todo={todo} />)
        ) : (
          <div>empty</div>
        )}
      </TodoListContainer>
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

const TodoListHeader = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TodoListContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
