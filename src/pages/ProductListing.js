import React, { useContext } from "react"; // ✅ Add useContext import
import { CartContext } from "../context/CartContext"; // ✅ Add CartContext import
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: "$20",
    image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
  },
  {
    id: 2,
    name: "Monstera",
    price: "$35",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDR8V0_-FC6PNmvuCojZhkWbv9B7dFNg0x5OCr5YtRF7t880sZWZW59bv8bumprS8v8tLzSfxSxmIu2Yrc47IN5A",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: "$40",
    image: "https://newgrowthdesigns.com/cdn/shop/products/18208_CP_1080x.jpg?v=1601062098",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: "$25",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87k-NTdi7rfAyNUT3I6ATVDDnxu1yOdCwrQ&ss",
  },
];

function ProductListing() {
  const { addToCart } = useContext(CartContext); // ✅ Fix undefined error

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;