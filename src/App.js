
import './App.css';
import Principal from "./components/principal/layout/Principal";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import Login from "./components/login/Login";
import ProductForm from "./components/producto/ProductForm";
import ProductList from "./components/principal/product-list/ProductList";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated type ="login" />} />
          <Route path="/register" element={<Login type ="register" />} />

          <Route path="/" element={<Principal />}>
            <Route path="/products" element={isAuthenticated ? <ProductList /> : <Navigate to="/login" />} />
            <Route path="/products/create" element={<ProductForm/> }/>
            <Route path="/products/edit/:productId" element={isAuthenticated ? <ProductForm/> : <Navigate to="/login"/>}/>
            <Route path="*" element={<Navigate to="/products" />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
