import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addToCart = (item) => {
    setCartState([...cartState, item]);
  };

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
