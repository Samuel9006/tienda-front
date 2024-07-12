import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import React, { useState } from 'react';
import {Outlet} from "react-router-dom";



function Principal() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product) => {
      const existingProductIndex = cart.findIndex(item => item.nombre === product.nombre);
      const updatedCart = [...cart];
      if (existingProductIndex > -1) {
        updatedCart[existingProductIndex].quantity++;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
      setCart(updatedCart);
    };
  
    const removeFromCart = (productTitle) => {
      const updatedCart = cart.filter(item => item.nombre !== productTitle);
      setCart(updatedCart);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
      };

    return (
      <div className="top-section">
          <div className="main-content" id="main-content">
              <div className="background-top">
                  <Header cart={cart} toggleCartVisibility={toggleCartVisibility}/>
              </div>
              <div className="bottom-section">
                  <main>
                      <Outlet context={{ addToCart }}/>
                  </main>
              </div>
              <Cart cart={cart} removeFromCart={removeFromCart} isVisible={isCartVisible}/>
          </div>
      </div>
    );
}

export default Principal;