import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../app/cartSlice';
import './Cart.css'; // Assume this file exists for custom styles

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <h4><u>{item.title}</u></h4>
              <p>Price: ${item.price}</p>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="btn btn-danger"
              >
                Remove This Item From Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
