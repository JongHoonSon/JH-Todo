import styled from "styled-components";
import { Link } from "react-router-dom";
import { TodoPage } from "./../todo/TodoPage";
import { LoginPage } from "./../auth/LoginPage";

interface HomePageProps {
  isUserLoggedIn: boolean;
}

export const HomePage = ({ isUserLoggedIn }: HomePageProps) => {
  return isUserLoggedIn ? <TodoPage /> : <LoginPage />;
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
