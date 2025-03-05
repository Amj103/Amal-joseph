import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function ShoppingCart() {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
      ))}
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
