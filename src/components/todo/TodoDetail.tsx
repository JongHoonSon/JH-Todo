import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { getTodoById } from "./../../api/todo/getTodoById";
import { useQuery } from "@tanstack/react-query";
import { updateTodo } from "../../api/todo/updateTodo";
import { useState } from "react";
import { useDeleteTodoMutation } from "../../hooks/api/todo/useDeleteTodoMutation";
import { useUpdateTodoMutation } from "./../../hooks/api/todo/useUpdateTodoMutation";

interface TodoDetailProps {
  selectedTodo: ITodo | undefined;
}

export const TodoDetail = ({ selectedTodo }: TodoDetailProps) => {
  const { data: todo } = useQuery<ITodo | undefined>(
    ["getTodoById", `${selectedTodo?.id}`],
    () =>
      getTodoById(
        selectedTodo === undefined
          ? { todoId: "0" }
          : { todoId: selectedTodo.id }
      )
  );

  const [newTitle, setNewTitle] = useState<string>(todo ? todo.title : "");
  const [newContent, setNewContent] = useState<string>(
    todo ? todo.content : ""
  );
  const updateTodoMutation = useUpdateTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleTodoEditFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTodoMutation.mutate({
      todoId: todo ? todo.id : "",
      todoTitle: newTitle,
      todoContent: newContent,
    });
    setNewTitle("");
    setNewContent("");
  };

  const handleTodoDeleteButtonClick = () => {
    deleteTodoMutation.mutate({ todoId: todo ? todo.id : "" });
  };

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
            <CustomForm onSubmit={handleTodoEditFormSumbit}>
              <label htmlFor="titleInput">제목</label>
              <input
                type="text"
                id="titleInput"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <label htmlFor="contentInput">내용</label>
              <input
                type="text"
                id="contentInput"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
              <input type="submit" value="수정" />
            </CustomForm>
          </TodoEditFormContainer>
          <TodoDeleteButton onClick={handleTodoDeleteButtonClick}>
            삭제
          </TodoDeleteButton>
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
