import React from 'react';

function ProductItem({ product, addToCart }) {
    return (
        <div className="item">
          <figure>
            <img src={product.imgSrc} alt="producto" />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <button className="btn-add-cart" onClick={() => addToCart(product)}>Añadir al carrito</button>
          </div>
        </div>
      );
}

export default ProductItem;
