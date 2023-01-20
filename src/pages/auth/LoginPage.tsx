import { Helmet } from "react-helmet";
import styled from "styled-components";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../hooks/api/auth/useLoginMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginPage = (): React.ReactElement => {
  const loginMutation = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>();

  const handleLoginFormSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("form data");
    console.log(data);
    loginMutation.mutate({
      emailInputValue: data.email,
      passwordInputValue: data.password,
    });
  };

  return (
    <Container>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
        <input
          {...register("email", {
            required: "이메일을 입력하세요.",
            validate: vaildateEmail,
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          {...register("password", {
            required: "비밀번호를 입력하세요.",
            validate: validatePassword,
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
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
