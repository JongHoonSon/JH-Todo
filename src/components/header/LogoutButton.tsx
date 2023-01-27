import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "./../../utils/checkUserLoggedIn";
import { Button } from "./../common/Button";
import { useConfirm } from "material-ui-confirm";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const confirm = useConfirm();
  const isUserLoggedIn = checkUserLoggedIn();
  const handleLogoutButtonClick = () => {
    confirm({ title: "로그아웃 하시겠습니까?" }).then(() => {
      localStorage.removeItem("jwt");
      navigate("/");
    });
  };

  return isUserLoggedIn ? (
    <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
  ) : (
    <></>
  );
};
