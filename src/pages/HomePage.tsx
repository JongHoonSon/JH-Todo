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
        <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
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
  height: 80px;
`;

const CustomLink = styled(Link)`
  width: 100px;
  height: 80px;
`;
