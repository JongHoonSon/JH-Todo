import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../utils/authenticateUser";

export const PublicRoute = (): React.ReactElement => {
  return isUserLoggedIn() ? <Navigate to="/" /> : <Outlet />;
};
