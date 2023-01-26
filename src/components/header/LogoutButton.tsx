import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "./../../utils/checkUserLoggedIn";
import { Button } from "./../common/Button";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = checkUserLoggedIn();
  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    navigate("/");
  };

  return isUserLoggedIn ? (
    <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
  ) : (
    <></>
  );
};
