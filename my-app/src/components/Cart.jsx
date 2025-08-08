// src/components/Cart.jsx
import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>🛍️ سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.item}>
                <span>{item.name}</span>
                <span>{item.price.toLocaleString()} تومان</span>
                <button onClick={() => onRemoveFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
          <p style={styles.total}>جمع کل: {total.toLocaleString()} تومان</p>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    borderTop: "2px solid #ddd",
    marginTop: "2rem",
    paddingTop: "1rem",
    maxWidth: "500px",
    margin: "2rem auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #ccc",
    paddingBottom: "0.5rem",
  },
  total: {
    marginTop: "1rem",
    fontWeight: "bold",
  },
};

export default Cart;