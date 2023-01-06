import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { CREATE_TODO } from "../../constants/apiUrls";
import { createTodos } from "../../api/todo/createTodo";

interface TodoFormProps {
  refetchTodos: () => void;
}

export const TodoForm = ({ refetchTodos }: TodoFormProps) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    createTodos({ todoTitle, todoContent }).then(() => {
      refetchTodos();
      setTodoTitle("");
      setTodoContent("");
    });

    axios
      .post(
        CREATE_TODO,
        { title: todoTitle, content: todoContent },
        {
          headers: {
            Authorization: window.localStorage.getItem("jwt"),
          },
        }
      )
      .then((res) => {
        console.log("res.data create todo");
        console.log(res.data);
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
