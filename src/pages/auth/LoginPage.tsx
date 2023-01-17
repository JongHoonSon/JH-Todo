import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./../../api/auth/login";

export const LoginPage = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const submitButton = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
    console.log(e);

    login({ emailInputValue, passwordInputValue }).then(() => navigate("/"));
  };

  return (
    <Container>
      <Helmet>
        <title>로그인</title>
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
      <Link to="/auth/join">회원가입</Link>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: skyblue;
`;
