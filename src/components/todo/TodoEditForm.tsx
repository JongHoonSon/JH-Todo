import styled from "styled-components";
import { useState } from "react";
import { ITodo } from "../../types/todo";
import { useUpdateTodoMutation } from "./../../hooks/api/todo/useUpdateTodoMutation";

interface TodoEditFormProps {
  selectedTodo: ITodo | undefined;
}

export const TodoEditForm = ({ selectedTodo }: TodoEditFormProps) => {
  const [newTitle, setNewTitle] = useState<string>(
    selectedTodo ? selectedTodo.title : ""
  );
  const [newContent, setNewContent] = useState<string>(
    selectedTodo ? selectedTodo.content : ""
  );
  const updateTodoMutation = useUpdateTodoMutation();

  const handleTodoEditFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTodoMutation.mutate({
      todoId: selectedTodo ? selectedTodo.id : "",
      todoTitle: newTitle,
      todoContent: newContent,
    });
    setNewTitle("");
    setNewContent("");
  };
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
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
