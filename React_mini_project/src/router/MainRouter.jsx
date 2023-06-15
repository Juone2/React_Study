import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPage from "../pages/UserPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
    </Routes>
  );
}

export default MainRouter;
