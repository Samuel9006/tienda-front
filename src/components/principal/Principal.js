import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import React, { useState } from 'react';



function Principal() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product) => {
      const existingProductIndex = cart.findIndex(item => item.title === product.title);
      const updatedCart = [...cart];
      if (existingProductIndex > -1) {
        updatedCart[existingProductIndex].quantity++;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
      setCart(updatedCart);
    };
  
    const removeFromCart = (productTitle) => {
      const updatedCart = cart.filter(item => item.title !== productTitle);
      setCart(updatedCart);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
      };
  
    return (
      <div className="top-section">
        <Sidebar />
        <div className="main-content" id="main-content">
          <div className="background-top">
            <Header cart={cart} toggleCartVisibility={toggleCartVisibility}/>
          </div>
          <div className="bottom-section">
            <ProductList addToCart={addToCart} />
          </div>
          <Cart cart={cart} removeFromCart={removeFromCart} isVisible={isCartVisible}/>
        </div>
      </div>
    );
}

export default Principal;