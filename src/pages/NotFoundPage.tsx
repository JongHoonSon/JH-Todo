import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundPage = (): React.ReactElement => {
  return (
    <Container>
      <NotFoundTitle>404 Not Found </NotFoundTitle>
      <NotFoundContent>페이지를 찾을 수 없습니다.</NotFoundContent>
      <NotFoundContent>
        The resource requested could not be found on this server.
      </NotFoundContent>
      <CustomLink to="/">홈으로 이동</CustomLink>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
`;

const NotFoundContent = styled.h2`
  margin: 10px 0px;
`;
const CustomLink = styled(Link)`
  margin-top: 30px;
  color: ${(props) => props.theme.textColor_primary};

  &:hover {
    opacity: 0.8;
  }
`;
