import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateTodoMutation } from "../../hooks/api/todo/useCreateTodoMutation";
import { TodoFormInputs } from "../../types/todoTypes";
import { SubmitInput } from "../common/SubmitInput";
import { SubmitHandler } from "react-hook-form/dist/types";
import { colors } from "../../styles/colors";

export const TodoCreateForm = (): React.ReactElement => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TodoFormInputs>();
  const createTodoMutation = useCreateTodoMutation();

  const handleFormSubmit: SubmitHandler<TodoFormInputs> = (data) => {
    createTodoMutation.mutate({
      todoTitle: data.title,
      todoContent: data.content,
    });
    reset();
  };

  return (
    <Container>
      <TodoFormHeader>할 일 추가</TodoFormHeader>
      <TodoForm onSubmit={handleSubmit(handleFormSubmit)}>
        <InputWrapper>
          <Label>제목</Label>
          <Input
            {...register("title", {
              required: "제목을 입력해 주세요.",
            })}
          />
        </InputWrapper>
        <InputError>
          <span>{errors.title && errors.title.message}</span>
        </InputError>

        <InputWrapper>
          <Label>내용</Label>
          <Input
            {...register("content", {
              required: "내용을 입력해 주세요.",
            })}
          />
        </InputWrapper>
        <InputError>
          <span>{errors.content && errors.content.message}</span>
        </InputError>

        <SubmitInput type="submit" value="추가" />
      </TodoForm>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 220px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor_primary};
`;

const TodoFormHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor_primary};
  margin-bottom: 10px;
`;

const TodoForm = styled.form`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InputError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  color: ${colors.ERROR};
  font-size: 12px;

  height: 20px;
  margin: 5px 0px;
`;

const Label = styled.span`
  color: ${(props) => props.theme.textColor_primary};
`;

const Input = styled.input`
  width: 75%;
  padding: 5px 10px;
  height: 25px;
  color: white;
  background-color: ${(props) => props.theme.bgColor_tertiary};
  border: 2px solid ${(props) => props.theme.borderColor};
`;
