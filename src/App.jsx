import { useState, useEffect } from "react";

import "./App.css";
import Itemlist from "./components/ItemList/Itemlist";
import Header from "./components/header/Header";
import { CartProvider } from "./context/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Itemlist />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
