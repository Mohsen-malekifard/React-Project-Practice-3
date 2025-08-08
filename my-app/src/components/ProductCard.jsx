import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price.toLocaleString()} تومان</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        افزودن به سبد خرید
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1rem",
    margin: "1rem",
    width: "240px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "0.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "0.5rem",
    transition: "background-color 0.2s",
  },
};

export default ProductCard;