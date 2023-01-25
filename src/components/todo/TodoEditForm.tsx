import styled from "styled-components";
import { useState } from "react";
import { ITodo } from "../../types/todo";
import { useUpdateTodoMutation } from "./../../hooks/api/todo/useUpdateTodoMutation";
import { useGetTodoByIdQuery } from "../../hooks/api/todo/useGetTodoByIdQuery";
import { useConfirm } from "material-ui-confirm";
import { SubmitInput } from "../common/SubmitInput";
import { Button } from "../common/Button";

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
      <TodoEditFormHeader>할 일 수정</TodoEditFormHeader>
      <CustomForm onSubmit={handleTodoEditFormSumbit}>
        <InputWrapper>
          <Label htmlFor="titleInput">제목</Label>
          <Input
            type="text"
            id="titleInput"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="contentInput">내용</Label>
          <Input
            type="text"
            id="contentInput"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </InputWrapper>

        <TodoOptionContainer>
          <SubmitInput type="submit" value="확인" />
          <Button onClick={() => handleTodoEditFormOpenChange(false)}>
            취소
          </Button>
        </TodoOptionContainer>
      </CustomForm>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor_primary};
  padding: 20px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const TodoEditFormHeader = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
`;

const CustomForm = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  color: ${(props) => props.theme.textColor_secondary};
  margin-right: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px 10px;
`;

const TodoOptionContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
