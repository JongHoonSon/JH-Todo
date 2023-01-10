import styled from "styled-components";
import { TodoList } from "../../components/todo/TodoList";
import { TodoDetail } from "./../../components/todo/TodoDetail";
import { TodoForm } from "./../../components/todo/TodoForm";
import { useQuery } from "@tanstack/react-query";
import { ITodo } from "../../types/todo";
import { getTodos } from "./../../api/todo/getTodos";
import { useState } from "react";

export const TodoPage = () => {
  const { data: todos, refetch } = useQuery<ITodo[] | undefined>(
    ["getTodos"],
    getTodos
  );

  const [selectedTodo, setSelectedTodo] = useState<ITodo | undefined>(
    undefined
  );

  const handleSelectedTodoChange = (newSelectedTodo: ITodo) => {
    setSelectedTodo(newSelectedTodo);
  };

  return (
    <Container>
      <Section>
        <TodoList
          todos={todos}
          handleSelectedTodoChange={handleSelectedTodoChange}
        />
        <TodoForm refetchTodos={refetch} />
      </Section>
      <Section>
        <TodoDetail selectedTodo={selectedTodo} />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: peru;
`;

const Section = styled.div`
  width: 50%;
  height: 100%;
`;
