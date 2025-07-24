// src/components/layout/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import LoginPage from '../../pages/auth/LoginPage';



const Header = () => {
  const cartItemCount = 3; 
  const isLoggedIn = false; // Giả sử trạng thái đăng nhập, sau này lấy từ AuthContext/Redux

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">FURNI-STORE</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/" end>Trang Chủ</NavLink></li>
              <li><NavLink to="/products">Sản Phẩm</NavLink></li>
              <li><NavLink to="/about">Giới Thiệu</NavLink></li>
              <li><NavLink to="/contact">Liên Hệ</NavLink></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="search-icon">🔍</button>
            <Link to="/cart" className="cart-icon">
              <span>🛒</span>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
            {isLoggedIn ? (
              <Link to="/profile" className="user-icon">👤</Link>
            ) : (
              <Link to="/login" className="login-button">Đăng Nhập</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

