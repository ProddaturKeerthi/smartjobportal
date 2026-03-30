import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");


  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const validatePassword = (pass) => {
    return pass.length >= 6;
  };


  const handleSubmit = () => {

    if (!username || !password || (!isLogin && !email)) {
      setError("All fields are required");
      return;
    }

    if (!isLogin && !validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    alert(isLogin ? "Login Success" : "Signup Success");
  };


  return (

    <div className="login-page">

      <div className="login-box">

        <h2>
          {isLogin ? "Login" : "Sign Up"}
        </h2>


        {!isLogin && (

          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        )}


        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />


        {/* password with eye */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>

        </div>


        {error && <p className="error">{error}</p>}


        <button className="login-btn" onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign Up"}
        </button>


        {isLogin && (
          <p className="link">
            Forgot Password?
          </p>
        )}


        <p
          className="link"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have account? Login"}
        </p>


      </div>

    </div>
  );
};

export default Login;