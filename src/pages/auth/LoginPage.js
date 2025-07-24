// src/pages/auth/LoginPage.js
import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.css'; // <-- Bước 1: Import file CSS

const LoginPage = () => {
  return (
    // Sử dụng container bao bọc bên ngoài
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <h2>Sign in to us</h2>
        <form action="/home">
          {/* Thay <p> bằng <div> với class="form-group" */}
          <div className="form-group">
            <label>Username or Email address</label>
            <input type="text" name="first_name" required />
          </div>

          <div className="form-group">
            <div className="password-label-group">
              <label>Password</label>
              <Link to="/forgot-password" className="right-label">
                Forget password?
              </Link>
            </div>
            <input type="password" name="password" required />
          </div>

          <div className="form-group">
            <button id="sub-btn" type="submit">
              Log In
            </button>
          </div>
        </form>

        {/* Thay <footer> bằng <div> với class="form-footer" */}
        <div className="form-footer">
          <p>
            First time? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;