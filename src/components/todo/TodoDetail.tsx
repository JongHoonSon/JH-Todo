import styled from "styled-components";
import { ITodo } from "../../types/todo";
import { useDeleteTodoMutation } from "../../hooks/api/todo/useDeleteTodoMutation";
import { useGetTodoByIdQuery } from "./../../hooks/api/todo/useGetTodoByIdQuery";
import { useConfirm } from "material-ui-confirm";
import { Button } from "../common/Button";

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
        <Empty>선택한 할 일의 상세 정보가 이곳에 표시됩니다.</Empty>
      ) : (
        <>
          <TodoDetailHeader>할 일 상세 정보</TodoDetailHeader>
          <TodoDetailContainer>
            <span>{`제목 : ${todo.title}`}</span>
            <span>{`내용 : ${todo.content}`}</span>
            <span>{`작성일자 : ${todo.createdAt}`}</span>
            <span>{`수정일자 : ${todo.updatedAt}`}</span>
          </TodoDetailContainer>

          <TodoOptionContainer>
            <Button onClick={() => handleTodoEditFormOpenChange(true)}>
              수정
            </Button>
            <Button onClick={handleTodoDeleteButtonClick}>삭제</Button>
          </TodoOptionContainer>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor_primary};
  padding: 20px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const TodoDetailHeader = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
`;

const TodoDetailContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 100px 0px;
  align-items: center;

  font-size: 20px;
  color: ${(props) => props.theme.textColor_secondary};
`;

const TodoOptionContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Empty = styled.span`
  color: ${(props) => props.theme.textColor_tertiary};
`;
