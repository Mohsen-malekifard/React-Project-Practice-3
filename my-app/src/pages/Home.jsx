// src/pages/Home.jsx
import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>محصولات</h1>
      <div style={styles.container}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default Home;