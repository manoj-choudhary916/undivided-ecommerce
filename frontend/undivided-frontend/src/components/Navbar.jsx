import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav style={styles.nav}>

      <div style={styles.links}>
        <Link to="/" style={styles.link}><h2>UNDIVIDED</h2></Link>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Shop</Link>

        <Link to="/cart" style={styles.link}>
          Cart ({cartItems.length})
        </Link>

        <Link to="/login" style={styles.link}>Login</Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#111",
    color: "white"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;
