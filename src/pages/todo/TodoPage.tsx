import styled from "styled-components";
import { TodoList } from "../../components/todo/TodoList";
import { TodoDetail } from "./../../components/todo/TodoDetail";
import { TodoForm } from "./../../components/todo/TodoForm";
import { useQuery } from "@tanstack/react-query";
import { ITodo } from "./../../types/todos";
import { getTodos } from "./../../api/todo/getTodos";

export const TodoPage = () => {
  const { data, refetch } = useQuery<ITodo[] | undefined>(["todos"], getTodos);

  return (
    <Container>
      <Section>
        <TodoList todos={data} />
        <TodoForm refetchTodos={refetch} />
      </Section>
      <Section>
        <TodoDetail />
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
