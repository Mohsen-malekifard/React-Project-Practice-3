// src/pages/ProductDetails.jsx
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
      <button onClick={() => onAddToCart(product)}>افزودن به سبد خرید</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
};

export default ProductDetails;