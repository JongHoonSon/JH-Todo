import { LoginPage } from "../../pages/auth/LoginPage";
import { useAppSelector } from "../../store/store";
import { useAuthentication } from "./../../hook/useAuthentication";

export const LoginPageContainer = () => {
  useAuthentication();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <LoginPage isUserLoggedIn={isUserLoggedIn} />;
};
