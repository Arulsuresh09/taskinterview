import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin",true);
      navigate("/");
    } else {
      alert("OOPS!! Wrong Email or Password");
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="head">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <label htmlFor="Email">Your Email</label>
                <input
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                  type="email"
                  placeholder="example@gmail.com"
                  id="Email"
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  required
                />

                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>

              <p className="mt-3">
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
