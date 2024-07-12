import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import {getAvalaibleProducts} from "../services/producto.service";

function ProductList({ addToCart }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAvalaibleProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
