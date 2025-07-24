// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Về FURNI-STORE</h4>
            <p>
              Chúng tôi cung cấp các sản phẩm nội thất và đồ công nghệ chất lượng cao, 
              mang đến sự tiện nghi và hiện đại cho cuộc sống của bạn.
            </p>
          </div>
          <div className="footer-column">
            <h4>Đường Dẫn Nhanh</h4>
            <ul>
              <li><Link to="/products">Sản Phẩm</Link></li>
              <li><Link to="/about">Giới Thiệu</Link></li>
              <li><Link to="/contact">Liên Hệ</Link></li>
              <li><Link to="/faq">Câu Hỏi Thường Gặp</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Liên Hệ</h4>
            <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
            <p>Email: support@furnistore.com</p>
            <p>Điện thoại: (028) 3812 3456</p>
          </div>
          <div className="footer-column">
            <h4>Theo Dõi Chúng Tôi</h4>
            <div className="social-icons">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">TW</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FURNI-STORE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;