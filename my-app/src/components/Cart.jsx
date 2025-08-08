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
                <button onClick={() => onRemoveFromCart(index)} style={styles.removeBtn}>
                  ❌
                </button>
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
    backgroundColor: "#fff",
    marginTop: "3rem",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    maxWidth: "600px",
    margin: "2rem auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
  },
  total: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    textAlign: "center",
    marginTop: "1rem",
    color: "#222",
  },
  removeBtn: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};

export default Cart;