import React from 'react';
import { createContext, useContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const CartContext = createContext();
const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorageState('cart', []);
  const [cartTotal, setCartTotal] = useLocalStorageState('total', 0);
  const [cartItems, setCartItems] = useLocalStorageState('items', 0);

  function addToCart(product, quantity) {
    const newCart = [...cart];
    const existingProduct = newCart.find(
      (item) => item.product.product_id === product.product_id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      newCart.push({ product, quantity });
    }

    setCart(newCart);
    setCartItems((prev) => prev + quantity);
    setCartTotal((prev) => prev + product.price * quantity);
  }

  function removeFromCart(product, quantity) {
    const newCart = [...cart];

    const existingProduct = newCart.find(
      (item) => item.product.product_id === product.product_id
    );

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= quantity;
      setCartItems((prev) => prev - 1);
      setCartTotal((prev) => prev - product.price);
    } else {
      setCart(
        newCart.filter((item) => item.product.product_id !== product.product_id)
      );
      setCartItems((prev) => prev - 1);
      setCartTotal((prev) => prev - product.price);
    }
  }

  function clearCart() {
    setCart([]);
    setCartTotal(0);
    setCartItems(0);
  }

  const value = {
    addToCart,
    removeFromCart,
    clearCart,
    cart,
    cartTotal,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { useCart };

export default CartProvider;
