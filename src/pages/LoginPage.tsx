import { Helmet } from "react-helmet";
import styled from "styled-components";

export const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>로그인</title>
      </Helmet>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: skyblue;
`;
