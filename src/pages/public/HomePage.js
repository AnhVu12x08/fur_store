// src/pages/public/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/product/ProductCard.js';

import './HomePage.css'; // Sẽ tạo file CSS sau

// Giả lập API call để lấy sản phẩm
const fetchFeaturedProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A', price: 29500000, images: ['https://via.placeholder.com/250x250.png/007BFF/FFFFFF?text=iPhone+15'] },
        { id: 2, name: 'Laptop Gaming ASUS ROG Strix G16', price: 45990000, images: ['https://via.placeholder.com/250x250.png/28A745/FFFFFF?text=ASUS+ROG'] },
        { id: 3, name: 'Samsung Galaxy S24 Ultra 5G 256GB', price: 26890000, images: ['https://via.placeholder.com/250x250.png/FFC107/000000?text=Samsung+S24'] },
        { id: 4, name: 'Tai nghe Sony WH-1000XM5', price: 7990000, images: ['https://via.placeholder.com/250x250.png/6C757D/FFFFFF?text=Sony+XM5'] },
        { id: 5, name: 'Apple Watch Series 9', price: 10490000, images: ['https://via.placeholder.com/250x250.png/DC3545/FFFFFF?text=Apple+Watch'] },
        { id: 6, name: 'Bàn phím cơ AKKO 3087 v2 Monet\'s Pond', price: 1890000, images: ['https://via.placeholder.com/250x250.png/17A2B8/FFFFFF?text=AKKO+Keyboard'] },
        { id: 7, name: 'Chuột Logitech MX Master 3S', price: 2490000, images: ['https://via.placeholder.com/250x250.png/343A40/FFFFFF?text=Logitech+Mouse'] },
        { id: 8, name: 'Màn hình LG UltraGear 27 inch 144Hz', price: 6990000, images: ['https://via.placeholder.com/250x250.png/FD7E14/FFFFFF?text=LG+Monitor'] },
      ]);
    }, 500); // Giả lập độ trễ mạng 0.5s
  });
};


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trong thực tế, bạn sẽ gọi hàm từ api/productApi.js ở đây
    // và sử dụng Redux để quản lý state
    fetchFeaturedProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="homepage">
      {/* 1. Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Siêu Sale Tháng 7</h1>
          <p>Giảm giá tới 50% cho hàng loạt sản phẩm công nghệ đỉnh cao!</p>
          <button className="cta-button">Khám Phá Ngay</button>
        </div>
      </section>

      {/* 2. Phần sản phẩm nổi bật */}
      <main className="main-content">
        <h2>Sản Phẩm Nổi Bật</h2>
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;