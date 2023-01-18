import { JoinPage } from "../../pages/auth/JoinPage";
import { useAppSelector } from "../../store/store";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";

export const JoinPageContainer = () => {
  useAuthenticateUser();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <JoinPage isUserLoggedIn={isUserLoggedIn} />;
};
