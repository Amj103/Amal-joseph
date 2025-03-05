import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // ✅ Ensure correct path

function Header() {
  const { cart } = useContext(CartContext); // ✅ Get cart data

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
