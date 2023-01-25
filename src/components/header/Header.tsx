import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "../../utils/checkUserLoggedIn";
import styled from "styled-components";
import { DarkmodeSwitchContainer } from "../../containers/header/DarkmodeSwitchContainer";
import { Button } from "./../common/Button";

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();
  const isUserLoggedIn = checkUserLoggedIn();
  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <Container>
      <DarkmodeSwitchContainer />
      {isUserLoggedIn && (
        <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 30px;

  background-color: ${(props) => props.theme.bgColor_primary};
`;
