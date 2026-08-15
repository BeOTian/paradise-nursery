import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

export default function ProductList() {
  const dispatch = useDispatch();
  // Lấy dữ liệu giỏ hàng từ Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Tính tổng số lượng hiển thị trên Navbar
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Mảng dữ liệu: 3 danh mục, mỗi danh mục 6 cây
  const plantsArray = [
    {
      category: 'Air Purifying',
      plants: [
        { name: 'Snake Plant', price: 15, image: 'plant1.jpg' },
        { name: 'Spider Plant', price: 12, image: 'plant2.jpg' },
        { name: 'Peace Lily', price: 18, image: 'plant3.jpg' },
        { name: 'Boston Fern', price: 10, image: 'plant4.jpg' },
        { name: 'Rubber Plant', price: 22, image: 'plant5.jpg' },
        { name: 'Aloe Vera', price: 14, image: 'plant6.jpg' }
      ]
    },
    {
      category: 'Aromatic',
      plants: [
        { name: 'Lavender', price: 20, image: 'plant7.jpg' },
        { name: 'Mint', price: 10, image: 'plant8.jpg' },
        { name: 'Rosemary', price: 15, image: 'plant9.jpg' },
        { name: 'Basil', price: 12, image: 'plant10.jpg' },
        { name: 'Thyme', price: 8, image: 'plant11.jpg' },
        { name: 'Oregano', price: 9, image: 'plant12.jpg' }
      ]
    },
    {
      category: 'Succulents',
      plants: [
        { name: 'Echeveria', price: 8, image: 'plant13.jpg' },
        { name: 'Jade Plant', price: 15, image: 'plant14.jpg' },
        { name: 'Zebra Plant', price: 12, image: 'plant15.jpg' },
        { name: 'Burros Tail', price: 14, image: 'plant16.jpg' },
        { name: 'String of Pearls', price: 18, image: 'plant17.jpg' },
        { name: 'Panda Plant', price: 10, image: 'plant18.jpg' }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav>
        <a href="#home">Home</a> | <a href="#plants">Plants</a> | <a href="#cart">Cart</a>
        <span>Cart Icon Count: {cartQuantity}</span>
      </nav>

      {plantsArray.map((categoryObj, index) => (
        <div key={index} className="category-section">
          <h2>{categoryObj.category}</h2>
          <div className="plant-grid">
            {categoryObj.plants.map((plant, idx) => {
              // Kiểm tra xem cây này đã có trong giỏ hàng chưa để disable nút
              const isAdded = cartItems.some(item => item.name === plant.name);
              
              return (
                <div key={idx} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    disabled={isAdded} 
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isAdded ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
