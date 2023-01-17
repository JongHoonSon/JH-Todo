import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JoinPage } from "./pages/auth/JoinPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { TodoPage } from "./pages/todo/TodoPage";
import { HomePageContainer } from "./containers/home/HomePageContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
