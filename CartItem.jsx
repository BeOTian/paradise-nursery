import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Hàm tính tổng tiền động dựa vào giỏ hàng thực tế
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            {/* Hiển thị tổng tiền cho từng loại cây */}
            <p>Total Cost: ${item.price * item.quantity}</p>
            
            <button onClick={() => handleIncrement(item)}>Increase</button>
            <button onClick={() => handleDecrement(item)}>Decrease</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <button onClick={onContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  );
}
