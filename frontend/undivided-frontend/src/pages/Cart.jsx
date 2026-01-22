import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ₹{item.price}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Cart;
