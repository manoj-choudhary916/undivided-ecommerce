import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1>Welcome to Undivided</h1>
        <p>Premium Fashion. Bold Identity.</p>
        <button style={styles.button}>Shop Now</button>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={styles.section}>
        <h2>Featured Products</h2>

        <div style={styles.products}>
            <ProductCard name="Black Hoodie" price="1299" />
            <ProductCard name="Oversized T-Shirt" price="899" />
            <ProductCard name="Denim Jacket" price="1999" />
        </div>

      </section>

      {/* CATEGORIES */}
      <section style={styles.section}>
        <h2>Categories</h2>

        <div style={styles.products}>
          <div style={styles.card}>Men</div>
          <div style={styles.card}>Women</div>
          <div style={styles.card}>Accessories</div>
        </div>
      </section>

    </div>
  );
}

const styles = {
  hero: {
    height: "60vh",
    background: "#222",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: "10px 20px",
    marginTop: "15px",
    cursor: "pointer"
  },
  section: {
    padding: "40px"
  },
  products: {
    display: "flex",
    gap: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    width: "150px",
    textAlign: "center"
  }
};

export default Home;
