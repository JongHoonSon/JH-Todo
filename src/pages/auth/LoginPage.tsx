import { Helmet } from "react-helmet";
import styled from "styled-components";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../hooks/api/auth/useLoginMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useState } from "react";
import { SubmitInput } from "../../components/common/SubmitInput";

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
        <title>로그인</title>
      </Helmet>
      <Container>
        <LoginHeader>Login</LoginHeader>
        <LoginForm onSubmit={handleSubmit(handleLoginFormSubmit)}>
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
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
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
            <ErrorMessage>
              {errors.password && errors.password.message}
            </ErrorMessage>
          </ErrorWrapper>
          <SubmitInput type="submit" value="로그인" disabled={!isValid} />
        </LoginForm>
        {loginError && (
          <ErrorMessage>
            아이디 또는 비밀번호 정보가 일치하지 않습니다.
          </ErrorMessage>
        )}
        <CustomLink to="/auth/join">회원가입</CustomLink>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50px;
  color: ${(props) => props.theme.textColor_primary};
  background-color: ${(props) => props.theme.bgColor_primary};
  padding: 10px;
`;

const LoginHeader = styled.div`
  height: 50px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 280px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 220px;
  height: 30px;
  padding: 5px 10px;

  color: ${(props) => props.theme.textColor_primary};
  background-color: ${(props) => props.theme.bgColor_tertiary};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const ErrorWrapper = styled.div`
  width: 280px;
  display: flex;
`;

const EmptySpace = styled.div`
  width: 60px;
`;

const ErrorMessage = styled.span`
  width: 220px;
  height: 20px;
  font-size: 12px;
  color: #ff6b6b;
  margin-bottom: 10px;
`;

const CustomLink = styled(Link)`
  font-size: 12px;
  color: ${(props) => props.theme.textColor_primary};
`;
