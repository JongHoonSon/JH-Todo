import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { Link } from "react-router-dom";
import { useJoinMutation } from "../../hooks/api/auth/useJoinMutation";

export const JoinPage = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const submitButton = useRef<HTMLInputElement>(null);
  const joinMutation = useJoinMutation();

  useEffect(() => {
    if (
      vaildateEmail(emailInputValue) &&
      validatePassword(passwordInputValue)
    ) {
      if (!isButtonActive) setIsButtonActive(true);
    } else {
      if (isButtonActive) setIsButtonActive(false);
    }
  }, [emailInputValue, passwordInputValue, isButtonActive]);

  useEffect(() => {
    submitButton.current?.toggleAttribute("disabled");
  }, [isButtonActive]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinMutation.mutate({ emailInputValue, passwordInputValue });
  };

  return (
    <Container>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
        />
        <input
          value={passwordInputValue}
          onChange={(e) => setPasswordInputValue(e.target.value)}
        />
        <input type="submit" ref={submitButton} disabled />
      </form>
      <Link to="/auth/login">로그인</Link>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: tomato;
`;
