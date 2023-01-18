import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../utils/isUserLoggedIn";

export const MainRoute = (): React.ReactElement => {
  return isUserLoggedIn() ? (
    <Navigate to="/todo" />
  ) : (
    <Navigate to="/auth/login" />
  );
};
