import { Header } from "../../components/common/Header";
import { useAppDispatch } from "../../store/store";
import { authSlice } from "./../../store/authSlice";

export const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  const { setIsUserLoggedIn } = authSlice.actions;

  const logout = () => {
    dispatch(setIsUserLoggedIn(false));
  };

  return <Header logout={logout}></Header>;
};
