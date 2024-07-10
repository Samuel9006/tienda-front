import React from 'react';

function Header({ cart, toggleCartVisibility }) {
    const productCount = cart.reduce((total, product) => total + product.quantity, 0);
    const openSideBar = () => {
        console.log("openside bar");
        
      };
    return (
        <header>
          <button className="menu-btn" id="menu-btn" onClick={openSideBar}>&#9776;</button>
          <h1 className='titulo-tienda'>Tienda</h1>
          <div className="container-icon" onClick={toggleCartVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>
            <div className="count-products">
              <span id="contador-productos">{productCount}</span>
            </div>
          </div>
        </header>
      );
    }

export default Header;
