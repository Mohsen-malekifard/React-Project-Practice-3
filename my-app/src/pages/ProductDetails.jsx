import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>محصول پیدا نشد!</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.price.toLocaleString()} تومان</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        افزودن به سبد خرید
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "2rem auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
};

export default ProductDetails;