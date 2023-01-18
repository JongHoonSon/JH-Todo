import { HomePage } from "../../pages/home/HomePage";
import { useAppSelector } from "../../store/store";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";

export const HomePageContainer = () => {
  useAuthenticateUser();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <HomePage isUserLoggedIn={isUserLoggedIn} />;
};
