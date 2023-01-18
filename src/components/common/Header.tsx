import { useNavigate } from "react-router-dom";

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();
  const handleLogoutButtonClick = () => {
    window.localStorage.removeItem("jwt");
    navigate("/");
  };

  return <button onClick={handleLogoutButtonClick}>로그아웃</button>;
};
