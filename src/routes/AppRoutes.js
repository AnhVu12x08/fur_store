import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import ForgetPasswordPage from '../pages/auth/ForgotPasswordPage';
import RegisterPage from '../pages/auth/RegisterPage';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/auth/LoginPage" element={<LoginPage />} />
        <Route path="/pages/auth/ForgotPasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/pages/auth/RegisterPage" element={<RegisterPage />} />

    </Routes>
  );
}

export default AppRoutes;

