import { JoinPage } from "../../pages/auth/JoinPage";
import { useAppSelector } from "../../store/store";
import { useAuthentication } from "../../hook/useAuthentication";

export const JoinPageContainer = () => {
  useAuthentication();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return <JoinPage isUserLoggedIn={isUserLoggedIn} />;
};
