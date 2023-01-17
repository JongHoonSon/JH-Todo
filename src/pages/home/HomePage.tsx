import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface HomePageProps {
  isUserLoggedIn: boolean;
}

export const HomePage = ({ isUserLoggedIn }: HomePageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn ? navigate("/todo") : navigate("/auth/login");
  }, [isUserLoggedIn]);

  return <></>;
};
