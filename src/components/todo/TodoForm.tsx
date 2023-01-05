import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { CREATE_TODO } from "./../../constants/api";

export const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    axios.post(
      CREATE_TODO,
      { title: todoTitle, content: todoContent },
      {
        headers: {
          Authorization: window.localStorage.getItem("jwt"),
        },
      }
    );
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
