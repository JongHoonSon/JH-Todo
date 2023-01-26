import styled from "styled-components";
import { ITodo } from "../../types/todoTypes";

interface TodoListItemProps {
  todo: ITodo;
  selectedTodo: ITodo | undefined;
  onClick: () => void;
}

export const TodoListItem = ({
  todo,
  selectedTodo,
  onClick,
}: TodoListItemProps): React.ReactElement => {
  return selectedTodo && selectedTodo === todo ? (
    <SelectedContainer>
      <span>{todo.title}</span>
    </SelectedContainer>
  ) : (
    <Container onClick={onClick}>
      <span>{todo.title}</span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  font-size: 14px;
  background-color: ${(props) => props.theme.bgColor_tertiary};
  color: ${(props) => props.theme.textColor_secondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SelectedContainer = styled(Container)`
  background-color: ${(props) => props.theme.bgColor_secondary};
`;
