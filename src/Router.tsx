import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JoinPage } from "./pages/JoinPage";
import { LoginPage } from "./pages/LoginPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
