import { HomePage } from "../../pages/home/HomePage";
import { useAppSelector } from "../../store/store";
import { useAuthentication } from "./../../hook/useAuthentication";

export const HomePageContainer = () => {
  useAuthentication();
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

  // const dispatch = useAppDispatch();
  // const { setIsUserLoggedIn } = authSlice.actions;

  // const logout = () => {
  //   dispatch(setIsUserLoggedIn(false));
  // };

  return <HomePage isUserLoggedIn={isUserLoggedIn} />;
};
