import styled from "styled-components";
import { useState } from "react";
import { useCreateTodoMutation } from "../../hooks/api/todo/useCreateTodoMutation";

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
      <form onSubmit={handleFormSubmit}>
        <input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
