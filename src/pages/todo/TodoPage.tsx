import styled from "styled-components";
import { TodoCreateForm } from "../../components/todo/TodoCreateForm";
import { TodoDetailContainer } from "./../../containers/todo/TodoDetailContainer";
import { Header } from "../../components/header/Header";
import { TodoEditFormContainer } from "./../../containers/todo/TodoEditFormContainer";
import { TodoListContainer } from "./../../containers/todo/TodoListContainer";

interface TodoPageProps {
  isTodoEditFormOpen: boolean;
}

export const TodoPage = ({
  isTodoEditFormOpen,
}: TodoPageProps): React.ReactElement => {
  return (
    <>
      <Container>
        <LeftSection>
          <TodoListContainer />
          <TodoCreateForm />
        </LeftSection>
        <RightSection>
          {isTodoEditFormOpen ? (
            <TodoEditFormContainer />
          ) : (
            <TodoDetailContainer />
          )}
        </RightSection>
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
`;

const LeftSection = styled.div`
  width: 400px;
  height: 100%;
`;

const RightSection = styled.div`
  width: 600px;
  height: 100%;
`;
