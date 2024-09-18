import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
