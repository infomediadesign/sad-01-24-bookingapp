import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setLoginError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", credentials);
      console.log("Login successful!");
      console.log("User details:", response.data.details);

      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data);

      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="login-input"
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
        {loginError && <p className="login-error">Incorrect username or password</p>}
      </form>
    </div>
  );
};

export default Login;
