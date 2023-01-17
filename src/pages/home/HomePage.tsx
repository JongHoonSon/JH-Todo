import styled from "styled-components";
import { Link } from "react-router-dom";

interface HomePageProps {
  isUserLoggedIn: boolean;
  logout: () => void;
}

export const HomePage = ({ isUserLoggedIn, logout }: HomePageProps) => {
  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    logout();
  };

  return (
    <Container>
      {isUserLoggedIn ? (
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
