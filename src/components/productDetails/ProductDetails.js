import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/cartSlice';
import './ProductDetails.css'; // Assume you have this for custom styles

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">{error}</div>;
  }

  return (
    <section className="product-details-section py-5">
      <div className="container">
        {product && (
          <>
            <h2 className="text-center">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="text-center">Price: ${product.price}</p>
            <button
              className="btn btn-primary btn-lg mx-auto d-block"
              onClick={() => dispatch(addToCart(product))}
            >
              ADD TO CART
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
