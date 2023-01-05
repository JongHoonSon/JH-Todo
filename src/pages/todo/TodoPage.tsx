import styled from "styled-components";
import { TodoList } from "../../components/todo/TodoList";
import { TodoDetail } from "./../../components/todo/TodoDetail";
import { TodoForm } from "./../../components/todo/TodoForm";

export const TodoPage = () => {
  return (
    <Container>
      <Section>
        <TodoList />
        <TodoForm />
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
