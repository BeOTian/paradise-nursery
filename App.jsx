import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing-page">
      {!showProductList ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
