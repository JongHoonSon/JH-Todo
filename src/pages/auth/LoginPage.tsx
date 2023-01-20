import { Helmet } from "react-helmet";
import styled from "styled-components";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../hooks/api/auth/useLoginMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useState } from "react";

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
    <Container>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          defaultValue=""
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            validate: vaildateEmail,
          })}
          placeholder="이메일"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          defaultValue=""
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            validate: validatePassword,
          })}
          placeholder="비밀번호"
        />
        {errors.password && <span>{errors.password.message}</span>}
        {loginError && (
          <span>아이디 또는 비밀번호 정보가 일치하지 않습니다.</span>
        )}
        <input type="submit" disabled={!isValid} />
      </form>
      <Link to="/auth/join">회원가입</Link>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 300px;
  margin: auto;
  background-color: skyblue;
`;
