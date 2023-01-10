import styled from "styled-components";
import { useState } from "react";
import { createTodos } from "../../api/todo/createTodo";

interface TodoFormProps {
  refetchTodos: () => void;
}

export const TodoForm = ({ refetchTodos }: TodoFormProps) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodos({ todoTitle, todoContent }).then(() => {
      refetchTodos();
      setTodoTitle("");
      setTodoContent("");
    });
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
