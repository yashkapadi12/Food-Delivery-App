import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  console.log(email);
  const [password, setPassword] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/loginUser`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("/dashboard");
        let authToken = response.data.authToken;
        // console.log(authToken)
        let userEmail = response.data.email;
        // console.log(response.)
        console.log(userEmail);
        sessionStorage.setItem("userEmail", userEmail);
        sessionStorage.setItem("authToken", authToken);
        console.log(sessionStorage.getItem("userEmail"));
        console.log("Login response:", response.data);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="m-3 btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Link className="m-3 btn btn-danger" to="/signUp">
          I'm a New User
        </Link>
      </form>
    </div>
  );
};

export default Login;
