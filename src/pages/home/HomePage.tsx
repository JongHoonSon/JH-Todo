import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (window.localStorage.getItem("jwt")) setIsLoggedIn(true);
  }, []);

  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
          <CustomLink to="/todo">Todo</CustomLink>
        </>
      ) : (
        <>
          <CustomLink to="/auth/login">로그인</CustomLink>
          <CustomLink to="/auth/join">회원가입</CustomLink>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: yellowgreen;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
`;

const CustomLink = styled(Link)`
  display: block;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: indigo;
  border: 1px solid black;
`;
