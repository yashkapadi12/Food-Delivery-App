import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../screens/Home";
import { Login } from "../screens/Login";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
