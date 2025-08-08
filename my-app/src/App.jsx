// src/App.jsx
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Home onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;