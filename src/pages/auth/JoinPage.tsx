import { useState } from "react";
import { Helmet } from "react-helmet";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { useJoinMutation } from "../../hooks/api/auth/useJoinMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { SubmitInput } from "./../../components/common/SubmitInput";

import {
  CustomLink,
  EmptySpace,
  ErrorWrapper,
  Form,
  FormContainer,
  FormError,
  FormHeader,
  Input,
  InputError,
  InputWrapper,
} from "./authPageStyle";

interface JoinFormInputs {
  email: string;
  password: string;
}

export const JoinPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<JoinFormInputs>({
    mode: "onChange",
  });

  const [joinError, setJoinError] = useState(false);
  const handleJoinErrorChange = (boolean: boolean) => setJoinError(boolean);

  const joinMutation = useJoinMutation({ handleJoinErrorChange });
  const handleJoinFormSubmit: SubmitHandler<JoinFormInputs> = (data) => {
    joinMutation.mutate({
      emailInputValue: data.email,
      passwordInputValue: data.password,
    });
  };

  watch(() => {
    if (joinError === true) {
      handleJoinErrorChange(false);
    }
  });

  return (
    <>
      <Helmet>
        <title>JH Todo | 회원가입</title>
      </Helmet>
      <FormContainer>
        <FormHeader>회원가입</FormHeader>
        <Form onSubmit={handleSubmit(handleJoinFormSubmit)}>
          <InputWrapper>
            <label htmlFor="email">이메일</label>
            <Input
              type="text"
              id="email"
              defaultValue=""
              {...register("email", {
                required: "이메일을 입력해 주세요.",
                validate: vaildateEmail,
              })}
            />
          </InputWrapper>

          <ErrorWrapper>
            <EmptySpace />
            <InputError>{errors.email && errors.email.message}</InputError>
          </ErrorWrapper>

          <InputWrapper>
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              id="password"
              defaultValue=""
              {...register("password", {
                required: "비밀번호를 입력해 주세요.",
                validate: validatePassword,
              })}
            />
          </InputWrapper>

          <ErrorWrapper>
            <EmptySpace />
            <InputError>
              {errors.password && errors.password.message}
            </InputError>
          </ErrorWrapper>
          <SubmitInput type="submit" value="회원가입" disabled={!isValid} />
        </Form>
        {joinError && <FormError>회원가입에 실패하였습니다.</FormError>}
        <CustomLink to="/auth/login">로그인 페이지로 이동</CustomLink>
      </FormContainer>
    </>
  );
};
