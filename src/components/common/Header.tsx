import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "../../utils/checkUserLoggedIn";
import styled from "styled-components";
import { DarkmodeSwitchContainer } from "../../containers/common/DarkmodeSwitchContainer";

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
        <button onClick={handleLogoutButtonClick}>로그아웃</button>
      )}
    </Container>
  );
};

const Container = styled.div``;
