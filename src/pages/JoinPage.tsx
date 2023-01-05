import { Helmet } from "react-helmet";
import styled from "styled-components";

export const JoinPage = () => {
  return (
    <Container>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: tomato;
`;
