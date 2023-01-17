import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logout: () => void;
}

export const Header = ({ logout }: HeaderProps) => {
  const navigate = useNavigate();
  const handleLogoutButtonClick = () => {
    logout();
    window.localStorage.removeItem("jwt");
    navigate("/");
  };

  return <button onClick={handleLogoutButtonClick}>로그아웃</button>;
};
