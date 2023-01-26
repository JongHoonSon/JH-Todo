import styled from "styled-components";
import { useGetTodosQuery } from "../../hooks/api/todo/useGetTodosQuery";
import { ITodo } from "../../types/todoTypes";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  handleSelectedTodoChange: (newSelectedTodo: ITodo) => void;
  handleTodoEditFormOpenChange: (boolean: boolean) => void;
}

export const TodoList = ({
  handleSelectedTodoChange,
  handleTodoEditFormOpenChange,
}: TodoListProps): React.ReactElement => {
  const { data: todos } = useGetTodosQuery();

  return (
    <Container>
      <TodoListHeader>
        <span>할 일 목록</span>
      </TodoListHeader>
      <TodoListContainer>
        {todos ? (
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onClick={() => {
                handleSelectedTodoChange(todo);
                handleTodoEditFormOpenChange(false);
              }}
            />
          ))
        ) : (
          <div>empty</div>
        )}
      </TodoListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor_primary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const TodoListHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};

  margin-bottom: 10px;
`;

const TodoListContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
