import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";

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

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
      </Routes>

      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </BrowserRouter>
  );
}

export default App;