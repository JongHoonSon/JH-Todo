import { LoginPage } from "../../pages/auth/LoginPage";
import { useAppSelector } from "../../store/store";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";

export const LoginPageContainer = () => {
  useAuthenticateUser();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <LoginPage isUserLoggedIn={isUserLoggedIn} />;
};
