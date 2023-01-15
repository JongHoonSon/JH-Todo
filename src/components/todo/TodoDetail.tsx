import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { getTodoById } from "./../../api/todo/getTodoById";
import { useQuery } from "@tanstack/react-query";

interface TodoDetailProps {
  selectedTodo: ITodo | undefined;
}

export const TodoDetail = ({ selectedTodo }: TodoDetailProps) => {
  const { data: todo, refetch } = useQuery<ITodo | undefined>(
    ["getTodoById", `${selectedTodo?.id}`],
    () =>
      getTodoById(
        selectedTodo === undefined
          ? { todoId: "0" }
          : { todoId: selectedTodo.id }
      )
  );
  return (
    <Container>
      {todo === undefined ? (
        "empty"
      ) : (
        <>
          <TodoDetailContainer>
            <span>{`제목 : ${todo.title}`}</span>
            <span>{`내용 : ${todo.content}`}</span>
            <span>{`id : ${todo.id}`}</span>
            <span>{`작성일 : ${todo.createdAt}`}</span>
            <span>{`수정일 : ${todo.updatedAt}`}</span>
          </TodoDetailContainer>
          <TodoEditFormContainer>
            <CustomForm>
              <label htmlFor="titleInput">제목</label>
              <input type="text" id="titleInput" value={todo.title} />
              <label htmlFor="contentInput">내용</label>
              <input type="text" id="contentInput" value={todo.content} />
              <input type="button" value="수정" />
            </CustomForm>
          </TodoEditFormContainer>
          <TodoDeleteButton>삭제</TodoDeleteButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const TodoDetailContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoEditFormContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoDeleteButton = styled.button`
  width: 50px;
  height: 50px;
`;
