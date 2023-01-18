import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../utils/isUserLoggedIn";

export const PublicRoute = (): React.ReactElement => {
  return isUserLoggedIn() ? <Navigate to="/" /> : <Outlet />;
};
