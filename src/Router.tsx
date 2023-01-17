import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageContainer } from "./containers/home/HomePageContainer";
import { LoginPageContainer } from "./containers/auth/LoginPageContainer";
import { JoinPageContainer } from "./containers/auth/JoinPageContainer";
import { TodoPageContainer } from "./containers/todo/TodoPageContainer";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/auth/join" element={<JoinPageContainer />} />
        <Route path="/auth/login" element={<LoginPageContainer />} />
        <Route path="/todo" element={<TodoPageContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
