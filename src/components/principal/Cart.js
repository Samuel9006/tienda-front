import React, { useState } from 'react';

function Cart({ cart, removeFromCart, isVisible }) {

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleCheckout = () => {
    alert(`Total a pagar: $${totalAmount}`);
    
  };


  return (
    <div className={`container-cart-products ${isVisible ? '' : 'hidden-cart'}`}>
      <div className="cart-product">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Tu carrito está vacío. Agrega productos para verlos aquí.</p>
        ) : (
          cart.map(product => (
            <div className="info-cart-product" key={product.title}>
              <span className="cantidad-producto-carrito">{product.quantity}</span>
              <p className="titulo-producto-carrito">{product.title}</p>
              <span className="precio-producto-carrito">${product.price}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-close"
                onClick={() => removeFromCart(product.title)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total:</h3>
          <button className="total-pagar" onClick={handleCheckout}>
            ${totalAmount}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;