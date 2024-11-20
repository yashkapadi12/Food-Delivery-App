import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/loginUser";

    axios
      .post(
        url,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("/dashboard");
        let authToken = response.data.authToken
        sessionStorage.setItem("authToken",authToken);
        console.log(sessionStorage.getItem("authToken"));
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
