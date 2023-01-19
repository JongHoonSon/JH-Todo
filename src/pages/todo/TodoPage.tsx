import styled from "styled-components";
import { TodoCreateForm } from "../../components/todo/TodoCreateForm";
import { TodoDetailContainer } from "./../../containers/todo/TodoDetailContainer";
import { TodoList } from "../../components/todo/TodoList";
import { Header } from "../../components/common/Header";
import { TodoEditFormContainer } from "./../../containers/todo/TodoEditFormContainer";

interface TodoPageProps {
  isTodoEditFormOpen: boolean;
}

export const TodoPage = ({
  isTodoEditFormOpen,
}: TodoPageProps): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <TodoList />
          <TodoCreateForm />
        </Section>
        <Section>
          {isTodoEditFormOpen ? (
            <TodoEditFormContainer />
          ) : (
            <TodoDetailContainer />
          )}
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
