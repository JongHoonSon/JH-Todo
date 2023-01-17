import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoPage } from "./pages/todo/TodoPage";
import { HomePageContainer } from "./containers/home/HomePageContainer";
import { LoginPageContainer } from "./containers/auth/LoginPageContainer";
import { JoinPageContainer } from "./containers/auth/JoinPageContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/auth/join" element={<JoinPageContainer />} />
        <Route path="/auth/login" element={<LoginPageContainer />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
