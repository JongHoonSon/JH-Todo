import { Helmet } from "react-helmet";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { useLoginMutation } from "../../hooks/api/auth/useLoginMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useState } from "react";
import { SubmitInput } from "../../components/common/SubmitInput";

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
  LinkContainer,
  LinkDescription,
} from "./authPageStyle";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
  });

  const [loginError, setLoginError] = useState(false);
  const handleLoginErrorChange = (boolean: boolean) => setLoginError(boolean);

  const loginMutation = useLoginMutation({ handleLoginErrorChange });
  const handleLoginFormSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    loginMutation.mutate({
      emailInputValue: data.email,
      passwordInputValue: data.password,
    });
  };

  watch(() => {
    if (loginError === true) {
      handleLoginErrorChange(false);
    }
  });

  return (
    <>
      <Helmet>
        <title>JH Todo | 로그인</title>
      </Helmet>
      <FormContainer>
        <FormHeader>로그인</FormHeader>
        <Form onSubmit={handleSubmit(handleLoginFormSubmit)}>
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
          <SubmitInput type="submit" value="로그인" disabled={!isValid} />
        </Form>
        {loginError && <FormError>로그인에 실패하였습니다.</FormError>}
        <LinkContainer>
          <LinkDescription>아이디가 없으신가요?</LinkDescription>
          <CustomLink to="/auth/join">회원가입 하러 가기</CustomLink>
        </LinkContainer>
      </FormContainer>
    </>
  );
};
