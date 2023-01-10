import styled from "styled-components";
import { ITodo } from "../../types/todo";

interface TodoDetailProps {
  selectedTodo: ITodo | undefined;
}

export const TodoDetail = ({ selectedTodo }: TodoDetailProps) => {
  return (
    <Container>
      {selectedTodo === undefined ? (
        "empty"
      ) : (
        <TodoDetailContainer>
          <span>{`제목 : ${selectedTodo.title}`}</span>
          <span>{`내용 : ${selectedTodo.content}`}</span>
          <span>{`id : ${selectedTodo.id}`}</span>
          <span>{`작성일 : ${selectedTodo.createdAt}`}</span>
          <span>{`수정일 : ${selectedTodo.updatedAt}`}</span>
        </TodoDetailContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
