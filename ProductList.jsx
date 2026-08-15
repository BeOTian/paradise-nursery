import React, { useState } from 'react';

export default function ProductList() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const plantsArray = [
    { category: 'Air Purifying', plants: [{ name: 'Snake Plant', price: 15 }, { name: 'Spider Plant', price: 12 }] },
    { category: 'Aromatic', plants: [{ name: 'Lavender', price: 20 }, { name: 'Mint', price: 10 }] },
    { category: 'Succulents', plants: [{ name: 'Aloe Vera', price: 8 }, { name: 'Cactus', price: 5 }] }
  ];

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div>
      <nav>
        <a href="#home">Home</a> | <a href="#plants">Plants</a> | <a href="#cart">Cart</a>
        <span>Cart Icon Count: {cartQuantity}</span>
      </nav>
      {plantsArray.map((categoryObj, index) => (
        <div key={index}>
          <h2>{categoryObj.category}</h2>
          {categoryObj.plants.map((plant, idx) => (
            <div key={idx}>
              <img src="plant.jpg" alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
