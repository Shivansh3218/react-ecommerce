import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

function Cart() {
  const { cartState } = useContext(CartContext);
  console.log(cartState, "cart state in cart");

  const checkout = () => {
    let total = 0;

    for (let i = 0; i < cartState.length; i++) {
      console.log(cartState[i].product_price);
      let price = parseInt(cartState[i].product_price.slice(1));
      total += price;
    }
    console.log(total);
    localStorage.setItem("total", total);
  };
  return (
    <div>
      {cartState.map((item, index) => {
        return (
          <div
            key={index}
            className="container "
            style={{ width: "300px", height: "500px" }}
          >
            <h1>hello</h1>
            <h3>{item.product_title}</h3>
            <img src={item.product_photo} alt="product" id="product_image" />
            <p>{item.product_price}</p>
          </div>
        );
      })}

      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
