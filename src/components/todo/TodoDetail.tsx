import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { useDeleteTodoMutation } from "../../hooks/api/todo/useDeleteTodoMutation";
import { useGetTodoByIdQuery } from "./../../hooks/api/todo/useGetTodoByIdQuery";
import { useConfirm } from "material-ui-confirm";

interface TodoDetailProps {
  selectedTodo: ITodo | undefined;
  handleTodoEditFormOpenChange: (boolean: boolean) => void;
}

export const TodoDetail = ({
  selectedTodo,
  handleTodoEditFormOpenChange,
}: TodoDetailProps): React.ReactElement => {
  const { data: todo } = useGetTodoByIdQuery(selectedTodo);
  const deleteTodoMutation = useDeleteTodoMutation();
  const confirm = useConfirm();

  const handleTodoDeleteButtonClick = () => {
    confirm({ title: "삭제하시겠습니까?" }).then(() => {
      deleteTodoMutation.mutate({ todoId: todo ? todo.id : "" });
    });
  };

  return (
    <Container>
      {todo === undefined ? (
        "empty"
      ) : (
        <>
          <TodoDetailContainer>
            <span>{`제목 : ${todo.title}`}</span>
            <span>{`내용 : ${todo.content}`}</span>
            <span>{`id : ${todo.id}`}</span>
            <span>{`작성일 : ${todo.createdAt}`}</span>
            <span>{`수정일 : ${todo.updatedAt}`}</span>
          </TodoDetailContainer>

          <TodoOptionButton onClick={() => handleTodoEditFormOpenChange(true)}>
            수정
          </TodoOptionButton>
          <TodoOptionButton onClick={handleTodoDeleteButtonClick}>
            삭제
          </TodoOptionButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const TodoDetailContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoOptionButton = styled.button`
  width: 50px;
  height: 50px;
`;
