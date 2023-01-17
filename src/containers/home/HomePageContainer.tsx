import { HomePage } from "../../pages/home/HomePage";
import { useAppSelector } from "../../store/store";
import { useAuthentication } from "./../../hook/useAuthentication";

export const HomePageContainer = () => {
  useAuthentication();
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  return <HomePage isUserLoggedIn={isUserLoggedIn} />;
};
