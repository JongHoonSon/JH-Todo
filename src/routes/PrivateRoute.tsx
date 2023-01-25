import { Navigate, Outlet } from "react-router-dom";
import { checkUserLoggedIn } from "../utils/checkUserLoggedIn";

export const PrivateRoute = (): React.ReactElement => {
  return checkUserLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};
