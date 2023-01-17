import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuthentication } from "./../../hook/useAuthentication";
import { useAppDispatch, useAppSelector } from "./../../store/store";
import { authSlice } from "./../../store/authSlice";

export const HomePage = () => {
  useAuthentication();
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  const dispatch = useAppDispatch();
  const { setIsUserLoggedIn } = authSlice.actions;

  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    dispatch(setIsUserLoggedIn(false));
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
