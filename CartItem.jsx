import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css'; // Đảm bảo import css

export default function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // YÊU CẦU BẮT BUỘC: Hàm tính tổng giỏ hàng dùng vòng lặp
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  // YÊU CẦU BẮT BUỘC: Hàm tính tổng tiền cho TỪNG cây
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Các hàm tương tác Redux
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Nếu xuống 0 thì xóa
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      {/* Hiển thị tổng tiền giỏ hàng */}
      <h2 className="total-cart-amount">Total Cart Amount: ${calculateTotalAmount()}</h2>

      <div className="cart-items-list">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Unit Price: ${item.price}</p>
              {/* Hiển thị tổng tiền của riêng cây này */}
              <p className="cart-item-total">Total Cost: ${calculateTotalCost(item)}</p>
              
              <div className="cart-item-actions">
                <button className="cart-btn-increment" onClick={() => handleIncrement(item)}>+</button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button className="cart-btn-decrement" onClick={() => handleDecrement(item)}>-</button>
                <button className="cart-btn-delete" onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-checkout-actions">
        {/* Nút Checkout hiện thông báo Coming Soon */}
        <button className="checkout-btn" onClick={() => alert('Coming Soon')}>Checkout</button>
        {/* Nút Continue Shopping */}
        <button className="continue-shopping-btn" onClick={onContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  );
}
