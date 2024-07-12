
import './App.css';
import Principal from "./components/principal/Principal";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import Login from "./components/login/Login";

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
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/products" element={isAuthenticated ? <Principal /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </Router>
  );
}

export default App;
