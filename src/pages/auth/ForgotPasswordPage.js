// src/pages/auth/ForgotPasswordPage.js
import React from "react";
import { Link } from "react-router-dom";

// Bước 1: Import file CSS của Login để kế thừa toàn bộ style
import './LoginPage.css'; 

const ForgotPasswordPage = () => {
  // Sửa lại tên file trong thư mục của bạn nếu cần
  // Tôi thấy ở ví dụ trước bạn có thể đã gõ nhầm là "FogotPasswordPage.js"
  
  return (
    // Sử dụng lại các class từ LoginPage.css
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <h2>Reset your password</h2>
        <h5 style={{fontWeight: 400, color: '#666', marginTop: '-1rem', marginBottom: '2rem'}}>
            Enter your email address and we will send you a link to reset your password.
        </h5>

        <form action="/login">
          {/* Thay <p> bằng <div> với class="form-group" */}
          <div className="form-group">
            <label>Email address</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            {/* Sử dụng lại id="sub-btn" từ LoginPage.css */}
            <button id="sub-btn" type="submit">
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="form-footer">
          <p>
            Remembered your password? <Link to="/login">Back to Login</Link>
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;