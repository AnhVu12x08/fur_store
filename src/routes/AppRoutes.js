import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import ForgetPasswordPage from '../pages/auth/ForgotPasswordPage';
import RegisterPage from '../pages/auth/RegisterPage';
import CartPage from "../pages/public/CartPage";
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import ProductPage from "../pages/public/ProductPage";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default AppRoutes;

