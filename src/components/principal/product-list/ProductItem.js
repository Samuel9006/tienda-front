import React from 'react';

function ProductItem({ product, addToCart }) {

    return (
        <div className="item">
          <figure>
            <img src={product.imagenPath} alt="producto" />
          </figure>
          <div className="info-product">
            <h2>{product.descripcion}</h2>
            <p className="price">${product.valor}</p>
            <button className="btn-add-cart" onClick={() => addToCart(product)}>Añadir al carrito</button>
          </div>
        </div>
      );
}

export default ProductItem;
