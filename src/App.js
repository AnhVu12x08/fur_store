import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <AppRoutes /> 
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
