import React from "react";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="product-image" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
      <button onClick={() => removeItem(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
