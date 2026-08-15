import React, { useState } from 'react';
export default function ProductList() {
  const [added, setAdded] = useState(false);
  return (
    <div>
      <nav>
        <a href="#home">Home</a> | <a href="#plants">Plants</a> | <a href="#cart">Cart</a>
        <span>Cart Icon Count: 1</span>
      </nav>
      <h2>Category 1</h2>
      <div><img src="thumb1.jpg" alt="Plant 1"/><h3>Plant 1</h3><p>$10</p><button disabled={added}>Add to Cart</button></div>
      <div><img src="thumb2.jpg" alt="Plant 2"/><h3>Plant 2</h3><p>$20</p><button disabled={added}>Add to Cart</button></div>
      <h2>Category 2</h2>
      <div><img src="thumb3.jpg" alt="Plant 3"/><h3>Plant 3</h3><p>$30</p><button disabled={added}>Add to Cart</button></div>
      <div><img src="thumb4.jpg" alt="Plant 4"/><h3>Plant 4</h3><p>$40</p><button disabled={added}>Add to Cart</button></div>
      <h2>Category 3</h2>
      <div><img src="thumb5.jpg" alt="Plant 5"/><h3>Plant 5</h3><p>$50</p><button disabled={added}>Add to Cart</button></div>
      <div><img src="thumb6.jpg" alt="Plant 6"/><h3>Plant 6</h3><p>$60</p><button disabled={added}>Add to Cart</button></div>
    </div>
  );
}
