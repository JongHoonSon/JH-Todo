import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

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
      {isLoggedIn && (
        <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
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
