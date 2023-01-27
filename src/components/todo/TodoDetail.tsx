import styled from "styled-components";
import { ITodo } from "../../types/todoTypes";
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
            <Label>제목</Label>
            <TodoInfoWrap>
              <TodoTitle>{todo.title}</TodoTitle>
            </TodoInfoWrap>

            <Label>내용</Label>
            <TodoInfoWrap>
              <TodoContent>{todo.content}</TodoContent>
            </TodoInfoWrap>

            <Label>작성 일자</Label>
            <TodoInfoWrap>
              <TodoCreatedAt>{todo.createdAt.split("T", 1)}</TodoCreatedAt>
            </TodoInfoWrap>

            <Label>수정 일자</Label>
            <TodoInfoWrap>
              <TodoUpdatedAt>{todo.updatedAt.split("T", 1)}</TodoUpdatedAt>
            </TodoInfoWrap>
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
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
`;

const TodoDetailContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 0px;
  align-items: center;

  color: ${(props) => props.theme.textColor_secondary};
`;

const Label = styled.label`
  width: 80%;
  height: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
`;

const TodoInfoWrap = styled.div`
  width: 80%;
  padding: 15px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;

const TodoInfo = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
`;

const TodoTitle = styled(TodoInfo)``;

const TodoCreatedAt = styled(TodoInfo)``;

const TodoUpdatedAt = styled(TodoInfo)``;

const TodoContent = styled.p`
  height: 150px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;
  word-break: break-all;
  line-height: 1.5;
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
