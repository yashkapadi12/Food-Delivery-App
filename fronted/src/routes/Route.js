import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { CartProvider } from "../components/CardReducer";
import MyOrder from "../screens/myOrder";

const AppRoute = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRoute;
