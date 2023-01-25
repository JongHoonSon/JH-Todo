import styled from "styled-components";
import { useState } from "react";
import { useCreateTodoMutation } from "../../hooks/api/todo/useCreateTodoMutation";
import { SubmitInput } from "../common/SubmitInput";

export const TodoCreateForm = (): React.ReactElement => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const createTodoMutation = useCreateTodoMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodoMutation.mutate({ todoTitle, todoContent });
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <Container>
      <TodoFormHeader>할 일 추가</TodoFormHeader>
      <TodoForm onSubmit={handleFormSubmit}>
        <InputWrapper>
          <Label>제목</Label>
          <Input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Input
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </InputWrapper>
        <SubmitInput type="submit" value="추가" />
      </TodoForm>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 250px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor_primary};
`;

const TodoFormHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
  margin-bottom: 10px;
`;

const TodoForm = styled.form`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.span`
  color: ${(props) => props.theme.textColor_primary};
`;

const Input = styled.input`
  color: ${(props) => props.theme.textColor_secondary};
  padding: 5px 10px;
  height: 30px;
`;
