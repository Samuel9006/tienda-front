
import './App.css';
import Principal from "./components/principal/Principal";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import Login from "./components/login/Login";
import ProductForm from "./components/producto/ProductForm";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} type ="login" />} />
          <Route path="/register" element={<Login type ="register" />} />
          <Route path="/products" element={isAuthenticated ? <Principal /> : <Navigate to="/login" />} />
          <Route path="/products/create" element={<ProductForm/>}/>
          <Route path="/products/edit/:productId" element={<ProductForm/>}/>
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </Router>
  );
}

export default App;
