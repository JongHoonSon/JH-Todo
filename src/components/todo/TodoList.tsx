import styled from "styled-components";
import { useGetTodosQuery } from "../../hooks/api/todo/useGetTodosQuery";
import { TodoListItemContainer } from "../../containers/todo/TodoListItemContainer";

export const TodoList = () => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Container>
      <TodoListHeader>
        <span>제목</span>
        <span>내용</span>
      </TodoListHeader>
      <TodoListContainer>
        {todos ? (
          todos.map((todo) => (
            <TodoListItemContainer key={todo.id} todo={todo} />
          ))
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
