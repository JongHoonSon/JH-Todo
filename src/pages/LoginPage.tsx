import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { vaildateEmail, validatePassword } from "./../utils/validateForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  }, [emailInputValue, passwordInputValue]);

  useEffect(() => {
    submitButton.current?.toggleAttribute("disabled");
  }, [isButtonActive]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    axios
      .post("http://localhost:8080/users/login", {
        email: emailInputValue,
        password: passwordInputValue,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
        window.localStorage.setItem("jwt", res.data.token);
      });
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
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: skyblue;
`;
