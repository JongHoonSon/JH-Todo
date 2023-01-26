import styled from "styled-components";
import { ITodo, TodoFormInputs } from "../../types/todoTypes";
import { useUpdateTodoMutation } from "./../../hooks/api/todo/useUpdateTodoMutation";
import { useGetTodoByIdQuery } from "../../hooks/api/todo/useGetTodoByIdQuery";
import { useConfirm } from "material-ui-confirm";
import { SubmitInput } from "../common/SubmitInput";
import { Button } from "../common/Button";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { colors } from "./../../styles/colors";

interface TodoEditFormProps {
  selectedTodo: ITodo | undefined;
  handleTodoEditFormOpenChange: (boolean: boolean) => void;
}

export const TodoEditForm = ({
  selectedTodo,
  handleTodoEditFormOpenChange,
}: TodoEditFormProps) => {
  const { data: todo } = useGetTodoByIdQuery(selectedTodo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormInputs>();
  const updateTodoMutation = useUpdateTodoMutation();
  const confirm = useConfirm();

  const handleTodoEditFormSumbit: SubmitHandler<TodoFormInputs> = (data) => {
    confirm({ title: "수정하시겠습니까?" }).then(() => {
      updateTodoMutation.mutate({
        todoId: selectedTodo ? selectedTodo.id : "",
        todoTitle: data.title,
        todoContent: data.content,
      });
      handleTodoEditFormOpenChange(false);
    });
  };
  return (
    <Container>
      <TodoFormHeader>할 일 수정</TodoFormHeader>
      <TodoForm onSubmit={handleSubmit(handleTodoEditFormSumbit)}>
        <InputWrapper>
          <Label htmlFor="titleInput">제목</Label>
          <Input
            type="text"
            id="titleInput"
            {...register("title", {
              value: todo?.title,
              required: "제목을 입력해 주세요.",
            })}
          />
        </InputWrapper>
        <InputError>
          <span>{errors.title && errors.title.message}</span>
        </InputError>

        <InputWrapper>
          <Label htmlFor="contentInput">내용</Label>
          <Input
            type="text"
            id="contentInput"
            {...register("content", {
              value: todo?.content,
              required: "내용을 입력해 주세요.",
            })}
          />
        </InputWrapper>
        <InputError>
          <span>{errors.content && errors.content.message}</span>
        </InputError>

        <TodoOptionContainer>
          <SubmitInput type="submit" value="확인" />
          <Button onClick={() => handleTodoEditFormOpenChange(false)}>
            취소
          </Button>
        </TodoOptionContainer>
      </TodoForm>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor_primary};
  padding: 20px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const TodoFormHeader = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
`;

const TodoForm = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  color: ${(props) => props.theme.textColor_secondary};
  margin-right: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px 10px;
  color: white;
  background-color: ${(props) => props.theme.bgColor_tertiary};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const InputError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  color: ${colors.ERROR};
  font-size: 14px;

  height: 50px;
  margin-bottom: 5px;
`;

const TodoOptionContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
