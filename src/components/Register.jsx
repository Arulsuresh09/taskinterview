import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");    
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="head">
                <h2>Register</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <label htmlFor="UserName">UserName</label>
                  <input
                    name="name"
                    value={input.name}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter Your Name"
                    id="UserName"
                  />

                  <label htmlFor="Email">Email</label>
                  <input
                    name="email"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    className="form-control mb-2"
                    type="email"
                    placeholder="example@gmail.com"
                    id="Email"
                    required
                  />

                  <label htmlFor="JobRole">Password</label>
                  <input
                    name="password"
                    value={input.password}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    className="form-control mb-2"
                    type="password"
                    placeholder="Enter Your password"
                    id="pass"
                    required
                  />

                  <button type="submit" className="btn btn-success">
                    Register
                  </button>

                  <p className="mt-3">
                    Already have an account? <a href="/login">Login here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
