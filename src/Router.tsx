import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/join" element />
        <Route path="/auth/login" element />
      </Routes>
    </BrowserRouter>
  );
};
