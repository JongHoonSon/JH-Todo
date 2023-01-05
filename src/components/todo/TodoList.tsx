import styled from "styled-components";
import { GET_TODOS } from "./../../constants/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoListItem } from "./TodoListItem";

export interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    axios
      .get(GET_TODOS, {
        headers: {
          Authorization: window.localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log("res.data todos");
        console.log(res.data);
        setTodos(res.data.data);
      });
  }, []);

  return (
    <Container>
      {todos ? todos.map((todo) => <TodoListItem {...todo} />) : <></>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
