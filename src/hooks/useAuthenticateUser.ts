import { authSlice } from "../store/authSlice";
import { useAppSelector, useAppDispatch } from "../store/store";

export const useAuthenticateUser = () => {
  const dispatch = useAppDispatch();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  const isTokenExist =
    typeof window.localStorage.getItem("jwt") === "string" ? true : false;

  if (isUserLoggedIn !== isTokenExist) {
    const { setIsUserLoggedIn } = authSlice.actions;
    dispatch(setIsUserLoggedIn(isTokenExist));
  }
};
