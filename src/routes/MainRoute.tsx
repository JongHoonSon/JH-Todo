import { Navigate } from "react-router-dom";
import { checkUserLoggedIn } from "../utils/checkUserLoggedIn";

export const MainRoute = (): React.ReactElement => {
  return checkUserLoggedIn() ? (
    <Navigate to="/todo" />
  ) : (
    <Navigate to="/auth/login" />
  );
};
