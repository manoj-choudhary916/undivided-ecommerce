import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price }) {

  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ name, price });
  };

  return (
    <div style={styles.card}>
      <div style={styles.image}>Image</div>

      <h4>{name}</h4>
      <p>₹ {price}</p>

      <button style={styles.button} onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    width: "180px",
    textAlign: "center",
    borderRadius: "8px"
  },
  image: {
    height: "120px",
    background: "#eee",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: "10px",
    padding: "6px 12px",
    cursor: "pointer"
  }
};

export default ProductCard;
