import React from "react";
import { createContext, useState } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.product_id !== product.product_id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
