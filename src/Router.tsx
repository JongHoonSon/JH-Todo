import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { MainRoute } from "./routes/MainRoute";
import { JoinPage } from "./pages/auth/JoinPage";
import { PublicRoute } from "./routes/PublicRoute";
import { LoginPage } from "./pages/auth/LoginPage";
import { TodoPageContainer } from "./containers/todo/TodoPageContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route element={<PublicRoute />}>
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/todo" element={<TodoPageContainer />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
