import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../utils/authenticateUser";

export const PrivateRoute = (): React.ReactElement => {
  return isUserLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};
