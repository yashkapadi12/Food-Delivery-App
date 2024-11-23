import Badge from "react-bootstrap/Badge";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./CardReducer";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  localStorage.setItem("temp", "first");
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };
  const loadCart = () => {
    setCartView(true);
  };
  // console.log(sessionStorage.getItem("authToken"));
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-3 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {sessionStorage.getItem("authToken") ? (
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/myOrder"
                >
                  MyOrders
                </Link>
              ) : (
                <div>fkasjdlflkj</div>
              )}
            </ul>

            {!sessionStorage.getItem("authToken") ? (
              <div>
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-1"
                  onClick={loadCart}
                >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : null}
                <div
                  className="btn bg-white text-success mx-1"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
