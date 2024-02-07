import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
  });
  const [showSuccess, setShowSuccess] = useState(false); // State to manage pop-up visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", formData);
      setShowSuccess(true); // Show pop-up on successful signup
    } catch (error) {
      console.error("Signup failed:", error.response.data);
    }
  };

  const handlePopUpClose = () => {
    setShowSuccess(false); // Close pop-up
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="signup-container">
      <div className="title">
        <h2>Booking App Sign Up!</h2>
      </div>
      <div className="sContainer">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="sInput"
            />
          </label>
          <button type="submit" className="sButton">
            Signup
          </button>
        </form>
      </div>
      {/* Pop-up for successful signup */}
      {showSuccess && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Sign Up Successful</h3>
            <button onClick={handlePopUpClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
