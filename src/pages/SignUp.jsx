import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="page-bg">

      <div className="signup-card">

        <h2>Sign Up</h2>
        <p className="subtitle">Create your account</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Register
          </button>

        </form>

        <p className="register">
          Already have an account? <Link to="/login">Login here!</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;