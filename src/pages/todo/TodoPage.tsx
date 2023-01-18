import styled from "styled-components";
import { TodoList } from "../../components/todo/TodoList";
import { TodoDetail } from "./../../components/todo/TodoDetail";
import { TodoForm } from "./../../components/todo/TodoForm";
import { ITodo } from "../../types/todo";
import { useEffect } from "react";
import { HeaderContainer } from "../../containers/common/HeaderContainer";
import { useNavigate } from "react-router-dom";

interface TodoPageProps {
  isUserLoggedIn: boolean;
  selectedTodo: ITodo | undefined;
  handleSelectedTodoChange: (newTodo: ITodo) => void;
}

export const TodoPage = ({
  isUserLoggedIn,
  selectedTodo,
  handleSelectedTodoChange,
}: TodoPageProps) => {
  const navgiate = useNavigate();
  useEffect(() => {
    if (!isUserLoggedIn) navgiate("/");
  }, []);

  return (
    <>
      <HeaderContainer />
      <Container>
        <Section>
          <TodoList handleSelectedTodoChange={handleSelectedTodoChange} />
          <TodoForm />
        </Section>
        <Section>
          <TodoDetail selectedTodo={selectedTodo} />
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
