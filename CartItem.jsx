import React from 'react';
export default function CartItem() {
  return (
    <div>
      <h2>Total Cart Amount: $100</h2>
      <div>
        <img src="thumb.jpg" alt="Plant" />
        <h3>Plant Name</h3>
        <p>Unit Price: $10</p>
        <p>Total Cost: $20</p>
        <button>Increase</button>
        <button>Decrease</button>
        <button>Delete</button>
      </div>
      <button>Coming Soon</button>
      <button>Continue Shopping</button>
    </div>
  );
}
