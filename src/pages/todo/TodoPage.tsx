import styled from "styled-components";
import { TodoCreateForm } from "../../components/todo/TodoCreateForm";
import { TodoDetailContainer } from "./../../containers/todo/TodoDetailContainer";
import { TodoEditFormContainer } from "./../../containers/todo/TodoEditFormContainer";
import { TodoListContainer } from "./../../containers/todo/TodoListContainer";
import { Helmet } from "react-helmet";

interface TodoPageProps {
  isTodoEditFormOpen: boolean;
}

export const TodoPage = ({
  isTodoEditFormOpen,
}: TodoPageProps): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>JH Todo | 할 일 관리</title>
      </Helmet>
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
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled.div`
  width: 1000px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
