import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ addToCart }) {
    const products = [
        { imgSrc: 'productos/netflix.jpeg', title: 'membresia por 1 mes a netflix', price: '8000' },
        { imgSrc: 'productos/amazon.jpeg', title: 'membresia por 1 mes a amazon prime video', price: '8500' },
        { imgSrc: 'productos/hbo.jpeg', title: 'membresia por 1 mes a HBOmax', price: '8000' },
        { imgSrc: 'productos/spotify.jpeg', title: 'membresia por 1 mes a spotify', price: '5000' },
        { imgSrc: 'productos/canva.jpeg', title: 'membresia por 1 mes a canva', price: '6000' },
        { imgSrc: 'productos/clarovideo.jpeg', title: 'membresia por 1 mes a netflix', price: '8000' },
        { imgSrc: 'productos/disney.jpeg', title: 'membresia por 1 mes a amazon prime video', price: '8500' },
        { imgSrc: 'productos/plex.jpeg', title: 'membresia por 1 mes a HBOmax', price: '8000' },
        { imgSrc: 'productos/vix.jpeg', title: 'membresia por 1 mes a spotify', price: '5000' },
        { imgSrc: 'productos/youtube.jpeg', title: 'membresia por 1 mes a canva', price: '6000' },
    ];

    return (
        <div className="container-items">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    addToCart={addToCart}
              />
            ))}
        </div>
    );
}

export default ProductList;
