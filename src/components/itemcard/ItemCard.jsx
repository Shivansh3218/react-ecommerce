import React, { useContext } from "react";
import "./itemCard.css";
import { CartContext } from "../../context/CartProvider";

function ItemCard({ item, index }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      key={index}
      className="container "
      style={{ width: "300px", height: "500px" }}
    >
      <h3>{item.product_title}</h3>
      <img src={item.product_photo} alt="product" id="product_image" />
      <p>{item.product_price}</p>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </div>
  );
}

export default ItemCard;
