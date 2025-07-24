// src/components/product/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Sẽ tạo file CSS sau

// Hàm tiện ích để định dạng tiền tệ
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Tránh lỗi nếu product không tồn tại
  }

  // Giả sử backend trả về 1 mảng ảnh và ta lấy ảnh đầu tiên
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '/placeholder.png';

  const handleAddToCart = () => {
    // Logic thêm vào giỏ hàng sẽ được xử lý bằng Redux ở đây
    console.log(`Đã thêm ${product.name} vào giỏ hàng!`);
    // Ví dụ: dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={imageUrl} alt={product.name} className="product-card__image" />
        <h3 className="product-card__name">{product.name}</h3>
      </Link>
      <p className="product-card__price">{formatCurrency(product.price)}</p>
      <button onClick={handleAddToCart} className="product-card__button">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductCard;