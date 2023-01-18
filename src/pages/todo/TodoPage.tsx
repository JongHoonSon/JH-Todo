import styled from "styled-components";
import { TodoForm } from "./../../components/todo/TodoForm";
import { useEffect } from "react";
import { HeaderContainer } from "../../containers/common/HeaderContainer";
import { useNavigate } from "react-router-dom";
import { TodoDetailContainer } from "./../../containers/todo/TodoDetailContainer";
import { TodoList } from "../../components/todo/TodoList";

interface TodoPageProps {
  isUserLoggedIn: boolean;
}

export const TodoPage = ({ isUserLoggedIn }: TodoPageProps) => {
  const navgiate = useNavigate();
  useEffect(() => {
    if (!isUserLoggedIn) navgiate("/");
  }, []);

  return (
    <>
      <HeaderContainer />
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
