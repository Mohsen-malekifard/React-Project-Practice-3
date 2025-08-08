// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price.toLocaleString()} تومان</p>
      <button onClick={() => onAddToCart(product)}>افزودن به سبد خرید</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    width: "200px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default ProductCard;