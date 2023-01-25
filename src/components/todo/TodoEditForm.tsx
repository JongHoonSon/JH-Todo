import styled from "styled-components";
import { useState } from "react";
import { ITodo } from "../../types/todo";
import { useUpdateTodoMutation } from "./../../hooks/api/todo/useUpdateTodoMutation";
import { useGetTodoByIdQuery } from "../../hooks/api/todo/useGetTodoByIdQuery";
import { useConfirm } from "material-ui-confirm";

interface TodoEditFormProps {
  selectedTodo: ITodo | undefined;
  handleTodoEditFormOpenChange: (boolean: boolean) => void;
}

export const TodoEditForm = ({
  selectedTodo,
  handleTodoEditFormOpenChange,
}: TodoEditFormProps) => {
  const { data: todo } = useGetTodoByIdQuery(selectedTodo);
  const [newTitle, setNewTitle] = useState<string>(todo ? todo.title : "");
  const [newContent, setNewContent] = useState<string>(
    todo ? todo.content : ""
  );
  const updateTodoMutation = useUpdateTodoMutation();
  const confirm = useConfirm();

  const handleTodoEditFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    confirm({ title: "수정하시겠습니까?" }).then(() => {
      updateTodoMutation.mutate({
        todoId: selectedTodo ? selectedTodo.id : "",
        todoTitle: newTitle,
        todoContent: newContent,
      });
      setNewTitle("");
      setNewContent("");
      handleTodoEditFormOpenChange(false);
    });
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
        <button onClick={() => handleTodoEditFormOpenChange(false)}>
          취소
        </button>
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
