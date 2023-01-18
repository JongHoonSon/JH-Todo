import styled from "styled-components";
import { TodoForm } from "./../../components/todo/TodoForm";
import { TodoDetailContainer } from "./../../containers/todo/TodoDetailContainer";
import { TodoList } from "../../components/todo/TodoList";
import { Header } from "../../components/common/Header";

export const TodoPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <TodoList />
          <TodoForm />
        </Section>
        <Section>
          <TodoDetailContainer />
        </Section>
      </Container>
    </>
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
