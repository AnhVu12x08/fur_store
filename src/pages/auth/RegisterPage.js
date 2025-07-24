// src/pages/auth/RegisterPage.js
import React from "react";
import { Link } from "react-router-dom";

// Bước 1: Import CSS
// Import file CSS của Login để kế thừa style chung
import './LoginPage.css'; 
// Import file CSS của Register để ghi đè và thêm style riêng
import './RegisterPage.css'; 

const RegisterPage = () => {
  return (
    // Sử dụng lại các class từ LoginPage.css
    <div className="login-page-container">
      <div className="login-form-wrapper register-form-wrapper">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>

        <form action="/home">
          {/* Thay <p> bằng <div> với class="form-group" */}
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" required />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          {/* Nhóm checkbox vào một div riêng */}
          <div className="checkbox-group">
            <input type="checkbox" name="checkbox" id="checkbox" required />
            <span>
              I agree all statements in{" "}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </span>
          </div>

          <div className="form-group">
            {/* Sử dụng lại id="sub-btn" từ LoginPage.css */}
            <button id="sub-btn" type="submit">
              Register
            </button>
          </div>
        </form>

        <div className="form-footer">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;