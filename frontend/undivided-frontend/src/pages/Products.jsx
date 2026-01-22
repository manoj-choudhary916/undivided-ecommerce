import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div style={styles.container}>

      <h2>All Products</h2>

      <div style={styles.grid}>
        <ProductCard name="Black Hoodie" price="1299" />
        <ProductCard name="Oversized T-Shirt" price="899" />
        <ProductCard name="Denim Jacket" price="1999" />
        <ProductCard name="Cargo Pants" price="1499" />
        <ProductCard name="Cap" price="499" />
        <ProductCard name="Sneakers" price="2999" />
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  }
};

export default Products;
